import dayjs from 'dayjs';


//должна быть проверка на валидность даты?
const formatDate = (date) => dayjs(date).format('D MMMM');
const formatTime = (date) => dayjs(date).format('HH:mm');
const formatDateForForm = (date) => dayjs(date).format('DD/MM/YYYY');


export {
  formatDate,
  formatTime,
  formatDateForForm,
};
