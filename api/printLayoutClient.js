import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';

export class PrintLayoutClient extends Client {

	async list() {

		return this.axios
			.get(`/print-layouts`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

