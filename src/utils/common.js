const getRandomInteger = (min,max) => {
  const lowerValue = Math.ceil(Math.min(min, max));
  const upperValue = Math.floor(Math.max(min, max));
  return Math.floor(Math.random()*(upperValue-lowerValue+1)+lowerValue);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getMultipleArrayElements = (arr, length) => {

  function first() {
    return arr.slice(0, length);
  }

  function shuffle() {
    const result = [];

    while (arr.length > 0) {
      const random = getRandomInt(0, arr.length - 1);
      const elem = arr.splice(random, 1)[0];
      result.push(elem);
    }

    return result;
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return first(shuffle(arr), length);
};

export {
  getRandomInteger,
  getRandomArrayElement,
  getMultipleArrayElements
};
