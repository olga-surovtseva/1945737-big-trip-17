import { getRandomInteger, getRandomArrayElement } from '../utils/common.js';
import { generateDestination } from './destination.js';
import { offersArray } from './offer.js';
// import dayjs from 'dayjs';
import { pointType } from '../const.js';

// const generateDate = () => {
//   const maxDaysGap = 10;
//   const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
//   return dayjs().add(daysGap, 'hours').toDate();
// };


export const generatePoint = () => (
  {
    basePrice: getRandomInteger(1000, 2000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-13T11:22:13.375Z',
    destination: generateDestination.name,
    id: getRandomInteger(1, 3),
    isFavorite: getRandomInteger(0, 1),
    offers: offersArray,
    type: getRandomArrayElement(pointType),
  }
);

