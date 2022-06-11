import { getRandomInteger, getRandomArrayElement} from '../utils/common.js';
import { generateDestinationName } from './destination.js';
import { getRandomOffersByType } from '../utils/offer.js';
import { pointTypes } from '../const.js';
import { nanoid } from 'nanoid';


export const generatePoint = () => {
  const pointType = getRandomArrayElement(pointTypes);
  const randomOffersByType = getRandomOffersByType(pointType);

  return {
    basePrice: getRandomInteger(1000, 2000),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-13T11:22:13.375Z',
    destination: generateDestinationName(),
    id: nanoid(),
    isFavorite: getRandomInteger(0, 1),
    offers: randomOffersByType,
    type: pointType,
  };
};

