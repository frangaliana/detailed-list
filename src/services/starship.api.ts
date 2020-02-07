import { api } from '../core';

import { StarshipApi, Starship } from './starship.model';
import { PaginatedResponse } from './common.model';

export const setupStarship = (): StarshipApi => ({
  getStarships: async () => api.get<PaginatedResponse<Starship[]>>('/starships'),
  getStarship: async (starshipId: string) => api.get<Starship>(`/starships/${starshipId}`),
});
