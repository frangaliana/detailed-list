export interface Character {
  name: string;
  birthYear: string;
  gender: string;
  homeworld: string;
  url: string;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T;
}
