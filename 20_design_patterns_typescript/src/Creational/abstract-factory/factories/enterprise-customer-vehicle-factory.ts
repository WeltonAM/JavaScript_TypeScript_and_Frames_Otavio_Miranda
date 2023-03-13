import { EnterpriseCar } from './../vehicle/enterprise-car';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';
import { Customer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/enterprise-customer';

export class EnterpriseVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
