import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Filter voucherlist
 ****************************************/

lexOffice.voucherlist.filter({ "voucherType": "invoice" })
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});
