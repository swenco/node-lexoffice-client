import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';

export class PostingCategoryClient extends Client {

	async list() {

		return this.axios
			.get(`/posting-categories`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

