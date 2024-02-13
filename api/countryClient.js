
import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';

export class CountryClient extends Client {

	async list() {

		return this.axios
			.get(`/countries`)
			.then((result) => {
				return (result.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}