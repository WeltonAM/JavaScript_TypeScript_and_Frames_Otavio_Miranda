import { VehicleFactory } from './vehicle-factory';
import { Vehicle } from '../vehicle/vehicle';
import { Bycicle } from '../vehicle/bycicle';

export class BycicleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bycicle(vehicleName);
  }
}
