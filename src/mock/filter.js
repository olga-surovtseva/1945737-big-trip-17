import { filter } from '../utils/filter.js';

const filterTrip = (points) => Object.entries(filter).map(([filterName, filterPoints]) => ({
  name: filterName,
  count: filterPoints(points).length,
}),
);

export {filterTrip};
