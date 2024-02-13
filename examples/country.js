import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get list of countries.
 ****************************************/

lexOffice.countries.list()
	.then((countries) => {
		console.log(countries);
	})
	.catch((err) => {
		console.error(err);
	});
