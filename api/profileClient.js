import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';

export class ProfileClient extends Client {

	async get() {

		return this.axios
			.get(`/profile`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

