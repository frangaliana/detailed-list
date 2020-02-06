import { BasicInfo } from './basic-info.model';

export type Film = BasicInfo & {
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
  url: string;
  created: string;
  edited: string;
};

export interface FilmApi {
  getFilms: () => Promise<Film[]>;
  getFilm: (filmId: string) => Promise<Film>;
}
