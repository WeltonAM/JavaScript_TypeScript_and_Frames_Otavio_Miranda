import { DeliveryFactory } from './delivery/delivery-factory';
import { deliveryContext } from './delivery/delivery-context';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Luiz', '20A', 'Av. Brasil', 'SP');
deliveryContext(factory, 'Helena', '20A', 'Av. Brasil', 'SP');

console.log('-----');
console.log(factory.getLocations());
