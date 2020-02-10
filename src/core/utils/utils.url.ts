import { ApiEndpointConfiguration } from './utils.env';

export const generateUrl = (apiEndpointConfiguration: ApiEndpointConfiguration, endpoint: string) =>
  `${apiEndpointConfiguration.protocol}://${apiEndpointConfiguration.domain}${
    apiEndpointConfiguration.port ? `:${apiEndpointConfiguration.port}` : ''
  }/${apiEndpointConfiguration.defaultApi}${endpoint}`;
