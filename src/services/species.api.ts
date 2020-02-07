import { api } from '../core';

import { PaginatedResponse } from './common.model';
import { SpeciesApi, Species } from './species.model';

export const setupSpecies = (): SpeciesApi => ({
  getSpeciess: async () => api.get<PaginatedResponse<Species[]>>('/species'),
  getSpecies: async (speciesId: string) => api.get<Species>(`/species/${speciesId}`),
});
