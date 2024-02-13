import { LexOfficeClient } from '../index.js'

const lexOffice = new LexOfficeClient('YOUR_LEXOFFICE_API_KEY');

/****************************************
 *	Get data for a event subscription with an id.
 ****************************************/

lexOffice.eventSubscriptions.get('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((eventSubscription) => {
		console.log(eventSubscription);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Add an event subscription
 ****************************************/

const eventSubscription = {
	"eventType": "contact.changed",
	"callbackUrl": "https://example.org/webhook"

};

lexOffice.eventSubscriptions.add(eventSubscription)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Delete an event subscription
 ****************************************/

lexOffice.eventSubscriptions.delete('fb90c4f3-7cac-44de-8f35-c94c35ad6617')
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

/****************************************
 *	Get a list of event subscriptions
 ****************************************/

lexOffice.eventSubscriptions.list()
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});