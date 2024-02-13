import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';
import uri from 'encodeuricomponent-tag';

export class DeliveryNoteClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/delivery-notes/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(deliveryNote) {

		return this.axios
			.post('/delivery-notes', deliveryNote)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async render(id) {

		return this.axios
			.get(uri`/delivery-notes/${id}/document`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

