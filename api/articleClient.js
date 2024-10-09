import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';
import uri from 'encodeuricomponent-tag';

export class ArticleClient extends Client {

	async get(id) {

		return this.axios
			.get(uri`/articles/${id}`)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async add(article) {

		return this.axios
			.post(uri`/articles`, article)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async update(id, article) {

		return this.axios
			.put(uri`/articles/${id}`, article)
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async filter(filter) {

		return this.axios
			.get(uri`/articles`, { params: filter })
			.then((res) => {
				return (res.data)
			}
			)
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

}

