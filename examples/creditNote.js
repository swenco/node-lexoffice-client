import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get data for a credit-note with an id.
 ****************************************/

lexOffice.creditNotes.get('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((creditNote) => {
		console.log(creditNote);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Add a new credit-note
 ****************************************/

const creditNote = {
	"archived": false,
	"voucherDate": "2023-02-22T00:00:00.000+01:00",
	"address": {
		"name": "Bike & Ride GmbH & Co. KG",
		"supplement": "Gebäude 10",
		"street": "Musterstraße 42",
		"city": "Freiburg",
		"zip": "79112",
		"countryCode": "DE"
	},
	"lineItems": [
		{
			"type": "custom",
			"name": "Abus Kabelschloss Primo 590 ",
			"description": "· 9,5 mm starkes, smoke-mattes Spiralkabel mit integrierter Halterlösung zur Befestigung am Sattelklemmbolzen · bewährter Qualitäts-Schließzylinder mit praktischem Wendeschlüssel · KabelØ: 9,5 mm, Länge: 150 cm",
			"quantity": 2,
			"unitName": "Stück",
			"unitPrice": {
				"currency": "EUR",
				"netAmount": 13.4,
				"taxRatePercentage": 19
			}
		},
		{
			"type": "custom",
			"name": "Energieriegel Testpaket",
			"quantity": 1,
			"unitName": "Stück",
			"unitPrice": {
				"currency": "EUR",
				"netAmount": 5,
				"taxRatePercentage": 0
			}
		},
		{
			"type": "text",
			"name": "Strukturieren Sie Ihre Belege durch Text-Elemente.",
			"description": "Das hilft beim Verständnis"
		}
	],
	"totalPrice": {
		"currency": "EUR"
	},
	"taxConditions": {
		"taxType": "net"
	},
	"title": "Rechnungskorrektur",
	"introduction": "Rechnungskorrektur zur Rechnung RE-00020",
	"remark": "Folgende Lieferungen/Leistungen schreiben wir Ihnen gut."
};

lexOffice.creditNotes.add(creditNote, {finalize:true})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Render a credit-note file
 ****************************************/

lexOffice.creditNotes.render('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});