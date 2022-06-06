import { getRandomInteger } from '../utils/common';

const getOffersBytype = () => {
  const collectionOffers = [
    {
      'id': 1,
      'title': 'Upgrade to a business class',
      'price': 120
    }, {
      'id': 2,
      'title': 'Choose the radio station',
      'price': 60
    }, {
      'id': 3,
      'title': 'In rutrum ac purus sit amet tempus',
      'price': 20
    }, {
      'id': 4,
      'title': 'Aliquam erat volutpat',
      'price': 40
    }, {
      'id': 5,
      'title': 'Nunc fermentum tortor ac porta dapibus',
      'price': 80
    }, {
      'id': 6,
      'title': 'Sed sed nisi sed augue convallis suscipit in sed felis',
      'price': 160
    }, {
      'id': 7,
      'title': 'Phasellus eros',
      'price': 10
    }
  ];

  const randomIndex = getRandomInteger(0,collectionOffers.length-1);

  return collectionOffers[randomIndex];
};

const getOffersArray = () => [
  {
    type: 'taxi',
    offers: [1, 2, 3]
  },
  {
    type: 'bus',
    offers: [4, 3]
  },
  {
    type: 'train',
    offers: [5, 4, 6]
  },
  {
    type: 'ship',
    offers: [6, 3, 1]
  },
  {
    type: 'drive',
    offers: [5, 3, 7]
  },
  {
    type: 'flight',
    offers: [5, 6]
  },
  {
    type: 'check-in',
    offers: [4, 6]
  },
  {
    type: 'sightseeing',
    offers: [3, 6, 7]
  },
  {
    type: 'restaurant',
    offers: [1, 6, 7]
  }
];

export {getOffersBytype, getOffersArray};
