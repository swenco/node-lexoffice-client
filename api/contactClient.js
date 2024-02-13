import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';
import uri from 'encodeuricomponent-tag';

export class ContactClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/contacts/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				return handleRequestError(err);
			});
	}

	async add(contact) {

		return this.axios
			.post(uri`/contacts`, contact)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async update(id, contact) {

		return this.axios
			.put(uri`/contacts/${id}`, contact)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async filter(filter) {

		return this.axios
			.get(uri`/contacts`, { params: filter })
			.then((res) => {
				return (res.data)
			}
			)
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

