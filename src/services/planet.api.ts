import { PlanetApi, Planet } from './planet.model';

export const setupPlanet = (): PlanetApi => ({
  getPlanets: async () => null,
  getPlanet: async (planetId: string) => null,
});
