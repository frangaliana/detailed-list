import { Theme } from './app.theme';

import { AM } from './core/api';
import * as VM from './app.model';

export const mapCharacterAMToVM = (character: AM.Character): VM.Character =>
  !!character && {
    name: character.name,
    homeworld: character.homeworld,
    birthYear: character.birth_year,
    gender: character.gender,
    mass: character.mass,
    height: character.height,
    hairColor: character.hair_color,
    skinColor: character.skin_color,
    eyeColor: character.skin_color,
    url: character.url,
  };

export const mapPaginatedCharactersAMToVM = (
  response: AM.PaginatedResponse<AM.Character[]>
): VM.PaginatedResponse<VM.Character[]> =>
  !!response && {
    count: response.count,
    next: response.next,
    previous: response.previous,
    results: !!response.results && response.results.length > 0 && response.results.map(mapCharacterAMToVM),
  };

export const mapToBadgeType = (gender: string): keyof Theme['palette']['badges'] => {
  switch (gender) {
    case 'male':
      return 'default2';
    case 'female':
      return 'default3';
    case 'hermaphrodite':
      return 'default4';
    default:
      return 'default';
  }
};

type BattleInfo = {
  type: keyof Theme['palette']['badges'];
  text: 'BBY' | 'ABY';
};

export const mapToBattleInfo = (birthYear: string): BattleInfo => {
  const isBeforeBattle = birthYear.includes('BBY');

  return {
    type: isBeforeBattle ? 'default3' : 'default4',
    text: isBeforeBattle ? 'BBY' : 'ABY',
  };
};
