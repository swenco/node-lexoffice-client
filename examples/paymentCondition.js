import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get list of payment-conditions.
 ****************************************/

lexOffice.paymentConditions.list()
	.then((paymentConditions) => {
		console.log(paymentConditions);
	})
	.catch((err) => {
		console.error(err);
	});
