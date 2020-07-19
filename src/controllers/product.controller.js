const responseResult = require('../utils/response.util');
const httpStatusCodes = require('http-status-codes');

let _productRepository = null;
let _campaignRepository = null;

class ProductController {
    constructor(ProductRepository, CampaignRepository) {
        _productRepository = ProductRepository;
        _campaignRepository = CampaignRepository;
    }

    async getProductsByCountryAndCampaign(req, res) {
        const { country_iso } = req.params;
        let error = null;

        if (!country_iso) {
            responseResult.error(res, 400, "country_iso does not found");
        }

        const campaign = await _campaignRepository.getLastCampaignByCountry(country_iso);
        if (!campaign) {
            responseResult.error(res, 404, "campaign does not found");
        }
    
        const product = await _productRepository.getProductsByCountryAndCampaign(country_iso, campaign.campaign_code);
        return responseResult.general(res, 200, product)
    }
};

module.exports = ProductController;