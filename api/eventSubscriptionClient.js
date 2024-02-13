import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';
import uri from 'encodeuricomponent-tag';

export class EventSubscriptionClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/event-subscriptions/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(eventSubscription) {

		return this.axios
			.post('/event-subscriptions', eventSubscription)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async delete(id) {

		return this.axios
			.delete(uri`/event-subscriptions/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async list() {

		return this.axios
			.get(`/event-subscriptions`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

