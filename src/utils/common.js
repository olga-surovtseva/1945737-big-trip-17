const getRandomInteger = (min, max) => {
  const lowerValue = Math.ceil(Math.min(min, max));
  const upperValue = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upperValue-lowerValue + 1) + lowerValue);
};

const shuffleArray = (arr) => {
  const result = [];

  while (arr.length > 0) {
    const random = getRandomInteger(0, arr.length - 1);
    const elem = arr.splice(random, 1)[0];
    result.push(elem);
  }
  return result;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getMultipleArrayElements = (elements) => {
  const arrLength = elements.length;
  return shuffleArray(elements).slice(0, getRandomInteger(0, arrLength));
};


export {
  getRandomInteger,
  getRandomArrayElement,
  getMultipleArrayElements
};
