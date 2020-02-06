import { BasicInfo } from './basic-info.model';

export type Planet = BasicInfo & {
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
  url: string;
  created: string;
  edited: string;
};

export interface PlanetApi {
  getPlanets: () => Promise<Planet[]>;
  getPlanet: (planetId: string) => Promise<Planet>;
}
