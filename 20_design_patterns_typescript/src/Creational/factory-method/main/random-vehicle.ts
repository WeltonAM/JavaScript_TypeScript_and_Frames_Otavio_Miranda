import { BycicleFactory } from '../factories/bycicle-factory';
import { randomNumbers } from '../utils/random-numbers';
import { CarFactory } from './../factories/car-factory';
import { Vehicle } from './../vehicle/vehicle';

export function randomCarAlgorithim(): Vehicle {
  const carFactory = new CarFactory();
  const bycicleFactory = new BycicleFactory();

  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta');
  const bycicle = bycicleFactory.getVehicle('Bycicle');

  const cars = [car1, car2, bycicle];

  return cars[randomNumbers(cars.length)];
}
