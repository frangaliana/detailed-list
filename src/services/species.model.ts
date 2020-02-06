import { BasicInfo } from './basic-info.model';

export type Species = BasicInfo & {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: string;
  people: string[];
  films: string[];
};

export interface SpeciesApi {
  getSpeciess: () => Promise<Species[]>;
  getSpecies: (speciesId: string) => Promise<Species>;
}
