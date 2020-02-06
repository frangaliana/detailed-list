import * as VM from './list.model';
import { moduleApi } from '../../services';
import { mapCharacterAMToVM, mapCharactersAMToVM } from './list.mapper';

export const getCharacter = (characterId: string): Promise<VM.Character[]> =>
  moduleApi.character.getCharacter(characterId).then(mapCharacterAMToVM);

export const getCharacters = (): Promise<VM.Character[]> =>
  moduleApi.character.getCharacters().then(mapCharactersAMToVM);
