import { api } from '../core';

import { PaginatedResponse } from './common.model';
import { CharacterApi, Character } from './character.model';

export const setupCharacter = (): CharacterApi => ({
  getCharacters: async () => api.get<PaginatedResponse<Character[]>>('/people'),
  getCharacter: async (characterId: string) => api.get<Character>(`/people/${characterId}`),
});
