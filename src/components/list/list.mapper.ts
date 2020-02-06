import { AM } from '../../services';
import * as VM from './list.model';

export const mapCharacterAMToVM = (character: AM.Character): VM.Character =>
  !!character && {
    name: character.name,
    homeworld: character.homeworld,
    birthYear: character.birth_year,
    height: character.height,
    mass: character.mass,
    gender: character.mass,
  };

export const mapCharactersAMToVM = (characters: AM.Character[]): VM.Character[] =>
  !!characters && characters.map(mapCharacterAMToVM);
