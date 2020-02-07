import { BasicInfo, PaginatedResponse } from './common.model';

export interface Species extends BasicInfo {
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
}

export interface SpeciesApi {
  getSpeciess: () => Promise<PaginatedResponse<Species[]>>;
  getSpecies: (speciesId: string) => Promise<Species>;
}
