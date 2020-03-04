import { AM } from '../../core/api';
import * as VM from './paginated-list.model';

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
