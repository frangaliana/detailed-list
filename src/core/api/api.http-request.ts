import { generateUrl } from './utils.url';

type Method = 'GET' | 'POST';

const customFetch = (endpoint: string, { method = 'GET', ...customConfig } = {}) => {
  const headers = { 'content-type': 'application/json; charset=utf-8' };

  const config = {
    method,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  const url = generateUrl('https://swapi.dev/api', null, endpoint);

  return fetch(url, config)
    .then(async (response) => {
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    })
    .catch((error) => {
      throw error;
    });
};

export const api = {
  get: (endpoint: string) => customFetch(endpoint, { method: 'GET' }),
  post: (endpoint: string, options) => customFetch(endpoint, { method: 'POST', ...options }),
};
