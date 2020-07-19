const express = require('express');
const route = express.Router();

const { ProductRepository, CampaignRepository } = require('../repositories');
const { ProductController } = require('../controllers');

const ftnValidator = require('../validators/function.validator');
const schemas = require('../validators/product.validator');

const _productController = new ProductController(
	new ProductRepository, 
	new CampaignRepository
);

route.get('/product/:country_iso', [ftnValidator(schemas)], _productController.getProductsByCountryAndCampaign);

/*
	Cree la ruta "/product/:country_iso"

	Debe manejar las excepciones producidas por data no permitida 
	en el parámetro "country_iso"
	También debe manejar las excepciones producidas por alguna operación
	con la base de datos
*/

module.exports = route;
