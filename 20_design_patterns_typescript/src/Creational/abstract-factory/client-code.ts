import { IndividualVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';
import { EnterpriseVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseVehicleCustomerFactory();

const individualFactory = new IndividualVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Fusca', 'João');
const car2 = individualFactory.createVehicle('Celta', 'Helena');

car1.pickUp();
car2.pickUp();
