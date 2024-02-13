import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get data for a quotation with an id.
 ****************************************/

lexOffice.quotations.get('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((quotation) => {
		console.log(quotation);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Add a new quotation
 ****************************************/

const quotation = {
	"organizationId": "aa93e8a8-2aa3-470b-b914-caad8a255dd8",
	"version": 4,
	"language": "de",
	"voucherDate": "2023-03-16T12:43:03.900+01:00",
	"expirationDate": "2023-04-15T12:43:03.900+02:00",
	"address": {
		"contactId": "97c5794f-8ab2-43ad-b459-c5980b055e4d",
		"name": "Berliner Kindl GmbH",
		"street": "Jubiläumsweg 25",
		"city": "Berlin",
		"zip": "14089",
		"countryCode": "DE"
	},
	"lineItems": [
		{
			"type": "custom",
			"name": "Axa Rahmenschloss Defender RL",
			"description": "Vollständig symmetrisches Design in metallicfarbener Ausführung. Der ergonomische Bedienkopf garantiert die große Benutzerfreundlichkeit dieses Schlosses. Sehr niedrige Kopfhöhe von 46 mm, also mehr Rahmenfreiheit... ",
			"quantity": 1,
			"unitName": "Stück",
			"unitPrice": {
				"currency": "EUR",
				"netAmount": 20.08,
				"grossAmount": 23.9,
				"taxRatePercentage": 19
			},
			"discountPercentage": 0,
			"lineItemAmount": 23.90,
			"subItems": [
				{
					"type": "custom",
					"name": "Abus Kabelschloss Primo 590 ",
					"description": "· 9,5 mm starkes, smoke-mattes Spiralkabel mit integrierter Halterlösung zur Befestigung am Sattelklemmbolzen · bewährter Qualitäts-Schließzylinder mit praktischem Wendeschlüssel · KabelØ: 9,5 mm, Länge: 150 cm",
					"quantity": 1,
					"unitName": "Stück",
					"unitPrice": {
						"currency": "EUR",
						"netAmount": 13.4,
						"grossAmount": 15.95,
						"taxRatePercentage": 19
					},
					"discountPercentage": 0,
					"lineItemAmount": 15.95,
					"alternative": true,
					"optional": false
				}
			],
			"alternative": false,
			"optional": false
		},
		{
			"type": "custom",
			"name": "Einfache Montage",
			"description": "Aufwand für einfache Montagetätigkeit",
			"quantity": 1,
			"unitName": "Stunde",
			"unitPrice": {
				"currency": "EUR",
				"netAmount": 4.12,
				"grossAmount": 4.9,
				"taxRatePercentage": 19
			},
			"discountPercentage": 0,
			"lineItemAmount": 4.90,
			"alternative": false,
			"optional": true
		}
	],
	"totalPrice": {
		"currency": "EUR",
		"totalNetAmount": 20.08,
		"totalGrossAmount": 23.90,
		"totalTaxAmount": 3.82
	},
	"taxAmounts": [
		{
			"taxRatePercentage": 19,
			"taxAmount": 3.82,
			"netAmount": 20.08
		}
	],
	"taxConditions": {
		"taxType": "gross"
	},
	"paymentConditions": {
		"paymentTermLabel": "10 Tage - 3 %, 30 Tage netto",
		"paymentTermDuration": 30,
		"paymentDiscountConditions": {
			"discountPercentage": 3,
			"discountRange": 10
		}
	},
	"introduction": "Gerne bieten wir Ihnen an:",
	"remark": "Wir freuen uns auf Ihre Auftragserteilung und sichern eine einwandfreie Ausführung zu.",
	"title": "Angebot"
};

lexOffice.quotations.add(quotation, { finalize: true })
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Render a quotation file
 ****************************************/

lexOffice.quotations.render('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});