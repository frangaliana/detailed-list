import { BasicInfo, PaginatedResponse } from './common.model';

export interface Vehicle extends BasicInfo {
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
}

export interface VehicleApi {
  getVehicles: () => Promise<PaginatedResponse<Vehicle[]>>;
  getVehicle: (vehicleId: string) => Promise<Vehicle>;
}
