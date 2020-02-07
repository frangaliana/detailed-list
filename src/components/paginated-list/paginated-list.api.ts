import * as VM from './paginated-list.model';
import { moduleApi } from '../../services';
import { mapPaginatedCharactersAMToVM } from './paginated-list.mapper';

export const getCharacters = (): Promise<VM.PaginatedResponse<VM.Character[]>> =>
  moduleApi.character.getCharacters().then(mapPaginatedCharactersAMToVM);
