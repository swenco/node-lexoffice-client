import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';
import uri from 'encodeuricomponent-tag';

export class DownPaymentInvoiceClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/down-payment-invoices/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

