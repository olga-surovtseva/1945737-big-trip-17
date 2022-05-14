import { getRandomInteger, getRandomArrayElement } from '../utils/common.js';
import { generateDestination } from './destination.js';
import { offersArray } from './offer.js';
import dayjs from 'dayjs';


const pointType = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const generateDate = () => {
  const maxDaysGap = 10;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  return dayjs().add(daysGap, 'hours').toDate();
};


export const generatePoint = () => (
  {
    basePrice: getRandomInteger(1000, 2000),
    dateFrom: generateDate(),
    dateTo: generateDate(),
    destination: generateDestination.name,
    id: getRandomInteger(1, 3),
    isFavorite: getRandomInteger(0, 1),
    offers: offersArray,
    type: getRandomArrayElement(pointType),
  }
);


export {pointType};
