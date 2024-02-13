import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get data for a contact with an id.
 ****************************************/

lexOffice.contacts.get('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((contact) => {
		console.log(contact);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Add a new contact
 ****************************************/

const contact = {
	"version": 0,
	"roles": {
		"customer": {
		}
	},
	"person": {
		"salutation": "Frau",
		"firstName": "Inge",
		"lastName": "Musterfrau"
	},
	"note": "Notizen"
};

lexOffice.contacts.add(contact)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Update a contacts data
 ****************************************/

lexOffice.contacts.update('fb90c4f3-7cac-44de-8f35-c94c35ad6617', contact)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Filter contacts by email
 ****************************************/
lexOffice.contacts.filter({ "email": "mail@domain.com" })
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});