import dayjs from 'dayjs';


const formatDate = (date) => dayjs(date).format('D MMMM');
const formatTime = (date) => dayjs(date).format('HH:mm');
const formatDateForForm = (date) => dayjs(date).format('DD/MM/YYYY');

const filterFuture = (date) => date && dayjs(date).isBefore(dayjs(),'day');
const filterPast = (date) => date && dayjs(date).isAfter(dayjs(),'day');

export {
  formatDate,
  formatTime,
  formatDateForForm,
  filterFuture,
  filterPast,
};
