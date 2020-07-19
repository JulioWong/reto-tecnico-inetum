/*
Collection: product
====================
Contiene todos los productos por país y campaña
====================
Fields:
- _id: ObjectId
- country_iso: string
- campaign_code: number
- description_commercial: string
*/

// db.collection("product")

/*
	Debe tener un método llamado getProductsByCountryAndCampaign
	que tendrá 2 parámetros: country_iso y campaign_code
	y que retornará todos los productos que cumplan con los parámetros

	Ejemplo de parámetros:
	country_iso: 'PE'
	campaign_code: 201918
*/

/*
	Para obtener la conexión a la base de datos
	const db = serviceDatabase.getConnection();
*/

const { getConnection } = require('../services/database.service');
const db = getConnection;

class ProductRepository {

	async getProductsByCountryAndCampaign(country_iso, campaign_code) {
		return db().collection('product').find({country_iso: country_iso, campaign_code: campaign_code}).toArray();
	}
}

module.exports = ProductRepository;