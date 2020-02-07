import { BasicInfo, PaginatedResponse } from './common.model';

export interface Character extends BasicInfo {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starship: string[];
  vehicles: string[];
}

export interface CharacterApi {
  getCharacters: () => Promise<PaginatedResponse<Character[]>>;
  getCharacter: (characterId: string) => Promise<Character>;
}
