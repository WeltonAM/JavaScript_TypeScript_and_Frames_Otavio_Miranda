import { RemoteControl } from './remote-control';

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const oldVolume = this.device.getVolume();

    this.device.setVolume(this.device.getVolume() + 10);

    console.log(`${this.device.getName()} had volume ${oldVolume}, now has: ${this.device.getVolume()}`);
  }

  volumeDown(): void {
    const oldVolume = this.device.getVolume();

    this.device.setVolume(this.device.getVolume() - 10);

    console.log(`${this.device.getName()} had volume ${oldVolume}, now has: ${this.device.getVolume()}`);
  }
}
