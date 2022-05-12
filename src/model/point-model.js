import { generatePoint } from '../mock/point';

export default class PointModel {
  #points = Array.from({length: 20}, generatePoint);

  get points() {
    return this.#points;
  }
}
