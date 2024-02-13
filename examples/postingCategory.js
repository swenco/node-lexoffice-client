import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get list of posting-categories.
 ****************************************/

lexOffice.postingCategories.list()
	.then((postingCategories) => {
		console.log(postingCategories);
	})
	.catch((err) => {
		console.error(err);
	});
