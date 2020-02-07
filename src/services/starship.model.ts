import { BasicInfo, PaginatedResponse } from './common.model';

export interface Starship extends BasicInfo {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
}

export interface StarshipApi {
  getStarships: () => Promise<PaginatedResponse<Starship[]>>;
  getStarship: (starshipId: string) => Promise<Starship>;
}
