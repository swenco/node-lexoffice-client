import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get data for a voucher with an id.
 ****************************************/

lexOffice.vouchers.get('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((voucher) => {
		console.log(voucher);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Add a new voucher
 ****************************************/

const voucher = {
	"type": "salesinvoice",
	"voucherNumber": "123-456",
	"voucherDate": "2023-06-28",
	"shippingDate": "2023-07-02",
	"dueDate": "2023-07-05",
	"totalGrossAmount": 119.00,
	"totalTaxAmount": 19.00,
	"taxType": "gross",
	"useCollectiveContact": true,
	"remark": "Bestellung von Max Mustermann.",
	"voucherItems": [{
		"amount": 119.00,
		"taxAmount": 19.00,
		"taxRatePercent": 19,
		"categoryId": "8f8664a8-fd86-11e1-a21f-0800200c9a66"
	}]
};

lexOffice.vouchers.add(voucher)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Update a vouchers data
 ****************************************/

lexOffice.vouchers.update('fb90c4f3-7cac-44de-8f35-c94c35ad6617', voucher)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Filter vouchers
 ****************************************/

lexOffice.vouchers.filter({ "voucherNumber": 'fb90c4f3-7cac-44de-8f35-c94c35ad6617' })
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Upload a file to a voucher
 ****************************************/

const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

const form = new FormData();

form.append('file', fs.createReadStream(path.join(__dirname, 'filename.pdf')));

lexOffice.vouchers.uploadFile(form, 'fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});