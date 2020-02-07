export interface PaginatedResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T;
}

export interface BasicInfo {
  url: string;
  created: string;
  edited: string;
}
