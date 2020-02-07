import { api } from '../core';

import { PaginatedResponse } from './common.model';
import { FilmApi, Film } from './film.model';

export const setupFilm = (): FilmApi => ({
  getFilms: async () => api.get<PaginatedResponse<Film[]>>('/films'),
  getFilm: async (filmId: string) => api.get<Film>(`/films/${filmId}`),
});
