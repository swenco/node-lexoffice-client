import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get profile data
 ****************************************/

lexOffice.profile.get()
	.then((profile) => {
		console.log(profile);
	})
	.catch((err) => {
		console.error(err);
	});
