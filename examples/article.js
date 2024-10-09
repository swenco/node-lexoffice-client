import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get data for a contact with an id.
 ****************************************/

lexOffice.articles.get('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((article) => {
		console.log(article);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Add a new article
 ****************************************/

const article = {
	"title": "Lexware buchhaltung Premium 2024",
	"type": "PRODUCT",
	"unitName": "Download-Code",
	"articleNumber": "LXW-BUHA-2024-001",
	"price": {
		"netPrice": 61.90,
		"leadingPrice": "NET",
		"taxRate": 19
	}
};

lexOffice.articles.add(article)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Update an articles data
 ****************************************/

 const article2 = {
	"title": "Lexware buchhaltung Premium 2024",
	"description": "Monatsabonnement. Mehrplatzsystem zur Buchhaltung. Produkt vom Marktführer. PC Aktivierungscode per Email",
	"type": "PRODUCT",
	"articleNumber": "LXW-BUHA-2024-001",
	"gtin": "9783648170632",
	"note": "Internal note",
	"unitName": "Download-Code",
	"price": {
	  "netPrice": 61.90,
	  "grossPrice": 73.66,
	  "leadingPrice": "NET",
	  "taxRate": 19
	},
	"version": 1
  }

lexOffice.articles.update('fb90c4f3-7cac-44de-8f35-c94c35ad6617', article2)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Filter articles by type
 ****************************************/
lexOffice.contacts.filter({ "type": "PRODUCT" })
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});