import { getRandomInteger, getRandomArrayElement } from '../utils/common.js';
import { generateDestination } from './destination.js';
import { offersArray } from './offer.js';

const pointType = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];


export const generatePoint = () => (
  {
    basePrice: getRandomInteger(1000, 2000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: generateDestination.name,
    id: getRandomInteger(1, 3),
    isFavorite: getRandomInteger(0, 1),
    offers: offersArray,
    type: getRandomArrayElement(pointType),
  }
);


export {pointType};
