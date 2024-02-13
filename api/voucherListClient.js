import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';

export class VoucherListClient extends Client {

	async filter(filterParameter) {

		return this.axios
			.get(`/voucherlist`, { params: filterParameter })
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

