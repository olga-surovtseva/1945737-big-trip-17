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
    dateFrom: `2019-07-${getRandomInteger(10, 20)}T${getRandomInteger(10, 15)}:${getRandomInteger(10, 55)}:56.845Z`,
    dateTo: `2019-07-${getRandomInteger(21, 30)}T${getRandomInteger(15, 22)}:${getRandomInteger(10, 55)}:13.375Z`,
    destination: generateDestinationName(),
    id: nanoid(),
    isFavorite: getRandomInteger(0, 1),
    offers: randomOffersByType,
    type: pointType,
  };
};

