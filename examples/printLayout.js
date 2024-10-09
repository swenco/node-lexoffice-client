import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get list of print-layouts.
 ****************************************/

lexOffice.printLayouts.list()
	.then((printLayouts) => {
		console.log(printLayouts);
	})
	.catch((err) => {
		console.error(err);
	});
