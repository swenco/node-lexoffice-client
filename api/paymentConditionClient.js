
import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';

export class PaymentConditionsClient extends Client {

	async list() {

		return this.axios
			.get(`/payment-conditions`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

