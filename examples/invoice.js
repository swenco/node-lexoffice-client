import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get data for an invoice with an id.
 ****************************************/

lexOffice.invoices.get('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((invoice) => {
		console.log(invoice);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Add a new invoice
 ****************************************/

const invoice = {
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
	"title": "Rechnung",
	"introduction": "Ihre bestellten Positionen stellen wir Ihnen hiermit in Rechnung",
	"remark": "Vielen Dank für Ihren Einkauf"
};

lexOffice.invoices.add(invoice, { finalize: true })
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Render an invoice file
 ****************************************/

lexOffice.invoices.render('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});