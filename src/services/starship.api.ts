import { StarshipApi, Starship } from './starship.model';

export const setupStarship = (): StarshipApi => ({
  getStarships: async () => null,
  getStarship: async (starshipId: string) => null,
});
