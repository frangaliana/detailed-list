import { BasicInfo } from './basic-info.model';

export type Character = BasicInfo & {
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
  url: string;
  created: string;
  edited: string;
};

export interface CharacterApi {
  getCharacters: () => Promise<Character[]>;
  getCharacter: (characterId: string) => Promise<Character>;
}
