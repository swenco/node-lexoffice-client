import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get data for a delivery-note with an id.
 ****************************************/

lexOffice.deliveryNotes.get('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((deliveryNote) => {
		console.log(deliveryNote);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Add a new delivery-note
 ****************************************/

const deliveryNote = {
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
			"unitPrice": null
		},
		{
			"type": "custom",
			"name": "Energieriegel Testpaket",
			"quantity": 1,
			"unitName": "Stück",
			"unitPrice": null
		},
		{
			"type": "text",
			"name": "Strukturieren Sie Ihre Belege durch Text-Elemente.",
			"description": "Das hilft beim Verständnis"
		}
	],
	"taxConditions": {
		"taxType": "net"
	},
	"title": "Lieferschein",
	"introduction": "Lieferschein zur Rechnung RE-00020",
	"deliveryTerms": "Lieferung frei Haus.",
	"remark": "Folgende Lieferungen/Leistungen schreiben wir Ihnen gut."
};

lexOffice.deliveryNotes.add(deliveryNote)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Render a delivery-note file
 ****************************************/

lexOffice.deliveryNotes.render('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});