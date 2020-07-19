/*
Collection: campaignbycountry
====================
Contiene la última campaña de cada país
====================
Fields:
- _id: ObjectId
- country_iso: string
- campaign_code: number
*/

// db.collection("campaignbycountry")

/*
	Debe tener un método llamado getLastCampaignByCountry
	que tendrá 1 parámetro: country_iso
	y que retornará el documento (registro) que contiene la última campaña.

	Solo existe un documento (registro) por país.

	Ejemplo de parámetro:
	country_iso: 'PE'
*/

/*
	Para obtener la conexión a la base de datos
	const db = serviceDatabase.getConnection();
*/

const { getConnection } = require('../services/database.service');
const db = getConnection;

class CampaignRepository {

	async getLastCampaignByCountry(country_iso) {
		return db().collection('campaignbycountry').findOne({country_iso: country_iso});
	}
}

module.exports = CampaignRepository;
