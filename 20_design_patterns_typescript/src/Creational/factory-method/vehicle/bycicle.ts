import { Vehicle } from './vehicle';

export class Bycicle implements Vehicle {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} is searching for ${customerName}`);
  }

  stop(): void {
    console.log(`${this.name} stopped.`);
  }
}
