import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';
import uri from 'encodeuricomponent-tag';

export class InvoiceClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/invoices/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(invoice, optionalFinalized) {

		return this.axios
			.post('/invoices', invoice, { params: optionalFinalized })
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async render(id) {

		return this.axios
			.get(uri`/invoices/${id}/document`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

