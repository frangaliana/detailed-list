import * as VM from './app.model';

import { api } from './core/api';

import { mapPaginatedCharactersAMToVM, mapCharacterAMToVM } from './app.mapper';

export const getCharacters = (url = 'https://swapi.co/api/people'): Promise<VM.PaginatedResponse<VM.Character[]>> =>
  api.get(url).then(mapPaginatedCharactersAMToVM);

export const getCharacter = (url: string): Promise<VM.Character> => api.get(url).then(mapCharacterAMToVM);
