import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get data for a payment with an id.
 ****************************************/

lexOffice.payments.get('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((payment) => {
		console.log(payment);
	})
	.catch((err) => {
		console.error(err);
	});
