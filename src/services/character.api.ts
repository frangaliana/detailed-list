import { CharacterApi, Character } from './character.model';

export const setupCharacter = (): CharacterApi => ({
  getCharacters: async () => null,
  getCharacter: async (characterId: string) => null,
});
