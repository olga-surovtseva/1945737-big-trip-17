import dayjs from 'dayjs';

const formatDate = (date) => dayjs(date).format('D MMMM');

const formatTime = (date) => dayjs(date).format('HH:mm');
const formatDateForForm = (date) => dayjs(date).format('DD/MM/YYYY');

const filterFuture = (date) => date && dayjs(date).isBefore(dayjs(),'day');
const filterPast = (date) => date && dayjs(date).isAfter(dayjs(),'day');

const getDurationTimeForSort = (dateto, datefrom) => dayjs(dateto).diff(dayjs(datefrom));

const sortByDay = (tripA, tripB) => {
  if (tripA.dateFrom > tripB.dateFrom) {
    return -1;
  }
  if (tripA.dateFrom < tripB.dateFrom) {
    return 1;
  }
  return 0;
};

const sortByTime = (tripA, tripB) => {
  const diffA = Math.abs(getDurationTimeForSort(tripA.dateTo, tripA.dateFrom));
  const diffB = Math.abs(getDurationTimeForSort(tripB.dateTo, tripB.dateFrom));
  if (diffA > diffB) {
    return -1;
  }
  if (diffA < diffB) {
    return 1;
  }
  return 0;
};

// const sortByTime = (tripA, tripB) => {
//   if (dayjs(tripA.dateTo).isBefore(dayjs(tripB.dateTo), 'd')) {
//     return -1;
//   }
//   if (dayjs(tripA.dateTo).isAfter(dayjs(tripB.dateTo), 'd')) {
//     return 1;
//   }
//   return 0;
// };

const sortByPrice = (tripA, tripB) => {
  if (tripA.basePrice > tripB.basePrice) {
    return -1;
  }
  if (tripA.basePrice < tripB.basePrice) {
    return 1;
  }
  return 0;
};


export {
  formatDate,
  formatTime,
  formatDateForForm,
  filterFuture,
  filterPast,
  sortByPrice,
  sortByDay,
  sortByTime
};
