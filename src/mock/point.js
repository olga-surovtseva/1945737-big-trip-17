import { getRandomInteger, getRandomArrayElement } from '../utils.js';
import { generateDestination } from './destination.js';
import { generateOffers } from './offer.js';

const pointType = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];


export const generatePoint = () => (
  {
    basePrice: getRandomInteger(1000, 2000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: generateDestination.name,
    id: getRandomInteger(1, 3),
    isFavorite: getRandomInteger(0, 1),
    offers: generateOffers,
    type: getRandomArrayElement(pointType),
  }
);


export {pointType};
