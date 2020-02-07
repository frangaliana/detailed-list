import { BasicInfo, PaginatedResponse } from './common.model';

export interface Film extends BasicInfo {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
}

export interface FilmApi {
  getFilms: () => Promise<PaginatedResponse<Film[]>>;
  getFilm: (filmId: string) => Promise<Film>;
}
