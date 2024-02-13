import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get data for a dunning with an id.
 ****************************************/

lexOffice.dunnings.get('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((dunning) => {
		console.log(dunning);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Add a new dunning
 ****************************************/

const dunning = {
	"archived": false,
	"voucherDate": "2023-07-22T00:00:00.000+02:00",
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
		"currency": "EUR",
		"totalNetAmount": 15.0,
		"totalGrossAmount": 17.85,
		"totalTaxAmount": 2.85
	},
	"taxConditions": {
		"taxType": "net"
	},
	"title": "Mahnung",
	"introduction": "Wir bitten Sie, die nachfolgend aufgelisteten Lieferungen/Leistungen unverzüglich zu begleichen.",
	"remark": "Sollten Sie den offenen Betrag bereits beglichen haben, betrachten Sie dieses Schreiben als gegenstandslos."
};

lexOffice.dunnings.add(dunning, { precedingSalesVoucherId: '58e512ce-ea13-11eb-bac8-2f511e28942a'})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Render dunning file
 ****************************************/

lexOffice.dunnings.render('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});