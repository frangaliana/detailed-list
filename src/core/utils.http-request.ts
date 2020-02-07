import { generateUrl } from './utils.url';
import { endpointConfiguration } from './utils.env';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface Api {
  get: <T>(endpoint: string) => Promise<T>;
}

const customFetch = async <T>(
  endpoint: string,
  method: Method = 'GET',
  headers: any = { Accept: 'application/json', 'Content-Type': 'application/json' },
  bodyRequest?: any
): Promise<T> => {
  const baseUrl = generateUrl(endpointConfiguration, endpoint);

  const options = {
    method,
    headers,
    body: bodyRequest ? JSON.stringify(bodyRequest) : undefined,
  };

  try {
    const response = await fetch(baseUrl, options);
    const body = (await response.json()) as Promise<T>;

    return body;
  } catch (error) {
    throw new Error(error);
  }
};

export const api: Api = {
  get: endpoint => customFetch(endpoint, 'GET'),
};
