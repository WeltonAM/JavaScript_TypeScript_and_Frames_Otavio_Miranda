// import { CarFactory } from './factories/car-factory';

import { randomCarAlgorithim } from './main/random-vehicle';
import { randomNumbers } from './utils/random-numbers';

// const carFactory = new CarFactory();

// const fusca = carFactory.getVehicle('Fusca');
// fusca.pickUp('Joana');
// fusca.stop();

// const celta = carFactory.getVehicle('Celta');
// celta.pickUp('Ana');
// celta.stop();

const customerNames = ['Ana', 'Joana', 'Helena', 'João'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithim();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log('----------');
}
