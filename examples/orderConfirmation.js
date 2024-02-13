import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get data for a order-confirmation with an id.
 ****************************************/

lexOffice.orderConfirmations.get('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((orderConfirmation) => {
		console.log(orderConfirmation);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Add a new order-confirmation
 ****************************************/

const orderConfirmation = {
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
			},
			"discountPercentage": 50
		},
		{
			"type": "custom",
			"name": "Aufwändige Montage",
			"description": "Aufwand für arbeitsintensive Montagetätigkeit",
			"quantity": 1,
			"unitName": "Stunde",
			"unitPrice": {
				"currency": "EUR",
				"netAmount": 8.32,
				"taxRatePercentage": 7
			},
			"discountPercentage": 0
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
			},
			"discountPercentage": 0
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
	"paymentConditions": {
		"paymentTermLabel": "10 Tage - 3 %, 30 Tage netto",
		"paymentTermDuration": 30,
		"paymentDiscountConditions": {
			"discountPercentage": 3,
			"discountRange": 10
		}
	},
	"shippingConditions": {
		"shippingDate": "2023-04-22T00:00:00.000+02:00",
		"shippingType": "delivery"
	},
	"title": "Auftragsbestätigung",
	"introduction": "Ihre bestellten Positionen stellen wir Ihnen hiermit in Rechnung",
	"remark": "Vielen Dank für Ihren Einkauf",
	"deliveryTerms": "Lieferung an die angegebene Lieferadresse"
};

lexOffice.orderConfirmations.add(orderConfirmation)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Render a order-confirmation file
 ****************************************/

lexOffice.orderConfirmations.render('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});