import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';
import uri from 'encodeuricomponent-tag';

export class VoucherClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/vouchers/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(voucher) {

		return this.axios
			.post('/vouchers', voucher)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async update(id, voucher) {

		return this.axios
			.put(uri`/vouchers/${id}`, voucher)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async filter(voucherNumber) {

		return this.axios
			.get(`/vouchers`, { params: voucherNumber })
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async uploadFile(data, id) {

		return this.axios
			.post(uri`/vouchers/${id}/files`, data, {
				headers: {
				...data.getHeaders(),
				},
			})
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

