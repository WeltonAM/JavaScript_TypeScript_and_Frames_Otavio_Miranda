import { VehicleProtocol } from '../vehicle/vehicle-protocol';
import { Customer } from '../customer/customer';

export interface CreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol;
}
