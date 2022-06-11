import { FilterType } from '../const.js';
import { filterPast, filterFuture } from './point.js';


const filter = {
  [FilterType.FUTURE]: (points) => points.filter((point) => filterFuture(point.dateFrom)),
  [FilterType.PAST]: (points) => points.filter((point) => filterPast(point.dateFrom)),
};

export {filter};
