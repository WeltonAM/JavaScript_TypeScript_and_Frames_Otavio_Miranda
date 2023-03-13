import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';
import { RemoteControl } from './remote-control/remote-control';
import { Tv } from './device/tv';
import { Radio } from './device/radio';

export function clientCode(abstraction: RemoteControl | RemoteControlWithVolume): void {
  abstraction.togglePower();

  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeDown();
}

const tv = new Tv();
const radio = new Radio();
const radioRemoteControl = new RemoteControlWithVolume(radio);
clientCode(radioRemoteControl);
