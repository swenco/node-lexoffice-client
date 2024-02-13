import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get data for a down-payment-invoice with an id.
 ****************************************/

lexOffice.downPaymentInvoices.get('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((downPaymentInvoice) => {
		console.log(downPaymentInvoice);
	})
	.catch((err) => {
		console.error(err);
	});
