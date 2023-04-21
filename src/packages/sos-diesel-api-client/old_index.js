import axios from 'axios';

class APIClient {
  constructor(baseUrl) {
    this.client = axios.create({
      baseURL: baseUrl,
    });
  }

  async post(endpoint, data) {
    const response = await this.client.post(endpoint, data);
    return response.data;
  }

  async get(endpoint, params) {
    const response = await this.client.get(endpoint, { params });
    return response.data;
  }

  async delete(endpoint) {
    const response = await this.client.delete(endpoint);
    return response.data;
  }

  async authenticate(email, password) {
    try {
      const response = await this.post('/users/login', { email, password });
      const { token } = response;
      return token;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  getUrl(endpoint) {
    return `${endpoint}`
  }
}

let instance = null;

export function getApiClient(baseUrl='') {
  if (!instance) {
    instance = new APIClient(baseUrl);
  }
  return instance;
}
