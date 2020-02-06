import { FilmApi, Film } from './film.model';

export const setupFilm = (): FilmApi => ({
  getFilm: async () => null,
  getFilms: async (filmId: string) => null,
});
