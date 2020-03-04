import * as VM from './result-detail.model';

import { api } from '../../core/api';

import { mapCharacterAMToVM } from './result-detail.mapper';

export const getCharacter = (url: string): Promise<VM.Character> => api.get(url).then(mapCharacterAMToVM);
