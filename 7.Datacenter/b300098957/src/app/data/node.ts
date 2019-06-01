import {Metric} from './metric';

export interface Node {
  name: string;
  cpu: Metric;
  mem: Metric;
}
