import { getRandomInteger } from '../utils/common.js';

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generateDestinationName = () => {
  const names = [
    'Greece',
    'Dominican Republic',
    'Chile',
    'Singapore',
    'Qatar',
  ];

  const randomIndex = getRandomInteger(0, names.length - 1);

  return names[randomIndex];
};

const generateNumberOfPictures = `http://picsum.photos/300/200?r=${getRandomInteger(0, 100)}`;


const destinationSection = () => (
  {
    description: generateDescription(),
    name: generateDestinationName(),
    pictures: [
      {
        src: generateNumberOfPictures,
        description: generateDescription(),
      }
    ]
  }
);


export {
  generateDestinationName,
  destinationSection,
};
