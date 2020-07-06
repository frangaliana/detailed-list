export interface ApiEndpointConfiguration {
  protocol: string;
  domain: string;
  port: number;
  defaultApi: string;
}

type swapiEnv = {
  SWAPI_ENDPOINT_PROTOCOL: string;
  SWAPI_ENDPOINT_DOMAIN: string;
  SWAPI_ENDPOINT_PORT: number;
  SWAPI_ENDPOINT_DEFAULT: string;
};

const swapiEnv = {
  // Endpoint Server
  SWAPI_ENDPOINT_PROTOCOL: 'https',
  SWAPI_ENDPOINT_DOMAIN: 'swapi.dev',
  SWAPI_ENDPOINT_PORT: null,
  SWAPI_ENDPOINT_DEFAULT: 'api',
};

export const endpointConfiguration: ApiEndpointConfiguration = {
  protocol: swapiEnv.SWAPI_ENDPOINT_PROTOCOL,
  domain: swapiEnv.SWAPI_ENDPOINT_DOMAIN,
  port: swapiEnv.SWAPI_ENDPOINT_PORT,
  defaultApi: swapiEnv.SWAPI_ENDPOINT_DEFAULT,
};
