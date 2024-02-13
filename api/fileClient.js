import { Client } from '../client.js';
import { handleRequestError } from '../errors.js';
import uri from 'encodeuricomponent-tag';

export class FileClient extends Client {

	async download(documentFileId, optionalParameter) {

		return this.axios
			.get(uri`/files/${documentFileId}`, {
				headers: {
					Accept: '*/*',
				},
				params: optionalParameter,
				responseType: 'arraybuffer',
			})
			.then((res) => {
				return (res.data)
			})
			.catch((err) => {
				throw handleRequestError(err);
			});
	}

	async upload(data) {

		return this.axios
			.post('/files', data, {
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

