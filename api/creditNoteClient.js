import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';
import uri from 'encodeuricomponent-tag';

export class CreditNoteClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/credit-notes/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(creditNote, optionalFinalized) {

		return this.axios
			.post('/credit-notes', creditNote, { params: optionalFinalized })
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async render(id) {

		return this.axios
			.get(uri`/credit-notes/${id}/document`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

