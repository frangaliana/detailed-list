import * as VM from './paginated-list.model';

import { api } from '../../core/api';

import { mapPaginatedCharactersAMToVM } from './paginated-list.mapper';

export const getCharacters = (url = 'people/'): Promise<VM.PaginatedResponse<VM.Character[]>> =>
  api.get(url).then(mapPaginatedCharactersAMToVM);
