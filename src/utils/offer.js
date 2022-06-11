import { collectionOffers, getOffersArray } from '../mock/offer.js';
import { getMultipleArrayElements } from '../utils/common';

const getOfferById = (id) => collectionOffers.find((offer) => offer.id === id);
const getOffersByType = (pointType) => getOffersArray().find((offerByType) => offerByType.type === pointType).offers;

const getRandomOffersByType = (pointType) => {
  const offers = getOffersByType(pointType);
  return getMultipleArrayElements(offers);
};

export {
  getOfferById,
  getOffersByType,
  getRandomOffersByType,
};
