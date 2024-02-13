import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';
import uri from 'encodeuricomponent-tag';

export class RecurringTemplateClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/recurring-templates/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async list(optionalFilter) {

		return this.axios
			.get(uri`/recurring-templates`, { params: optionalFilter })
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}
}

