import Axios from 'axios';

export class Client {
  
  constructor(apiKey) {
    this.axios = Axios.create({
      baseURL: 'https://api.lexoffice.io/v1',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }
}