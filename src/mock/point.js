import { getRandomInteger, getRandomArrayElement} from '../utils/common.js';
import { generateDestination } from './destination.js';
import { getOffersArray} from './offer.js';
// import dayjs from 'dayjs';
import { pointTypes } from '../const.js';


export const generatePoint = () => {
  const pointType = getRandomArrayElement(pointTypes);
  const offersByType = getOffersArray().find((offer) => offer['type'] === pointType).offers;
  // const randomOffers = collectionOffers.id[1];


  return {
    basePrice: getRandomInteger(1000, 2000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-13T11:22:13.375Z',
    destination: generateDestination.name,
    id: getRandomInteger(1, 7),
    isFavorite: getRandomInteger(0, 1),
    offers: offersByType,
    type: pointType,
    checked: getRandomInteger(0, 1),
  };
};

