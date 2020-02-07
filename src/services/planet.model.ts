import { BasicInfo, PaginatedResponse } from './common.model';

export interface Planet extends BasicInfo {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
}

export interface PlanetApi {
  getPlanets: () => Promise<PaginatedResponse<Planet[]>>;
  getPlanet: (planetId: string) => Promise<Planet>;
}
