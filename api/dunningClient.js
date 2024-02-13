import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';
import uri from 'encodeuricomponent-tag';

export class DunningClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/dunnings/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(dunning, optionalPrecedingSalesVoucherId) {

		return this.axios
			.post('/dunnings', dunning, { params: optionalPrecedingSalesVoucherId })
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async render(id) {

		return this.axios
			.get(uri`/dunnings/${id}/document`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

