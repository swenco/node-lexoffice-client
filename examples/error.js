import * as lexAPI from '../index.js'

const lexOffice = new lexAPI.LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get data for a contact with an id.
 ****************************************/

lexOffice.contacts.get('fb90c4f3-7cac-44de-8f35-c94c35ad661')
	.then((contact) => {
		console.log(contact);
	})
	.catch((err) => {

		console.log(err);

		if (err instanceof lexAPI.RequestError) {
			console.log('Ooops RequestError!');

			if (err instanceof lexAPI.RequestNotFoundError) {
				console.log('404 RequestNotFoundError');
			}

			if (err instanceof lexAPI.RequestInternalServerError) {
				console.log('500 RequestInternalServerError');
			}

		}

	});
