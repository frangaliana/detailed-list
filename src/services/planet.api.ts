import { api } from '../core';

import { PaginatedResponse } from './common.model';
import { PlanetApi, Planet } from './planet.model';

export const setupPlanet = (): PlanetApi => ({
  getPlanets: async () => api.get<PaginatedResponse<Planet[]>>('/planets'),
  getPlanet: async (planetId: string) => api.get<Planet>(`/planets/${planetId}`),
});
