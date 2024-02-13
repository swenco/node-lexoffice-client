import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get data for a recurring template with an id.
 ****************************************/

lexOffice.recurringTemplates.get('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((recurringTemplate) => {
		console.log(recurringTemplate);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Get a list of recurring templates
 ****************************************/

lexOffice.recurringTemplates.list()
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});