import Clouds from './Clouds';
import Cords from './Cords';
import Main from './Main';
import Rain from './Rain';
import Snow from './Snow';
import Sys from './Sys';
import Wearther from './Weather';
import Wind from './Wind';

export default interface OpenWeartherMap {
  coord?: Cords;
  weather?: Array<Wearther>;
  base?: string;
  main?: Main;
  visibility?: number;
  wind?: Wind;
  rain?: Rain;
  snow?: Snow;
  clouds?: Clouds;
  dt?: number;
  sys?: Sys;
  timezone?: number;
  id?: number;
  name?: string;
  cod?: number;
}
