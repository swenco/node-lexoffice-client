import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';
import uri from 'encodeuricomponent-tag';

export class OrderConfirmationClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/order-confirmations/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(orderConfirmation) {

		return this.axios
			.post('/order-confirmations', orderConfirmation)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async render(id) {

		return this.axios
			.get(uri`/order-confirmations/${id}/document`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

