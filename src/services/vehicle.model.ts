import { BasicInfo } from './basic-info.model';

export type Vehicle = BasicInfo & {
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
  url: string[];
  created: string;
  edited: string;
};

export interface VehicleApi {
  getVehicles: () => Promise<Vehicle[]>;
  getVehicle: (vehicleId: string) => Promise<Vehicle>;
}
