import { VehicleApi, Vehicle } from './vehicle.model';
import { api } from '../core';
import { PaginatedResponse } from './common.model';

export const setupVehicle = (): VehicleApi => ({
  getVehicles: async () => api.get<PaginatedResponse<Vehicle[]>>('/vehicles'),
  getVehicle: async (vehicleId: string) => api.get<Vehicle>(`/vehicles/${vehicleId}`),
});
