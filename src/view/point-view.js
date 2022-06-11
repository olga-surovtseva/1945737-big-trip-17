import AbstractView from '../framework/view/abstract-view.js';
import { formatDate, formatTime } from '../utils/point.js';
import { getOfferById } from '../utils/offer.js';
import dayjs from 'dayjs';

const createPointTemplate = (point) => {

  const {basePrice, destination, dateFrom, dateTo, isFavorite, offers, type} = point;

  const pointDateFrom = formatDate(dateFrom);
  const pointDateTo = formatDate(dateTo);

  const pointTimeStart = formatTime(dateFrom);
  const pointTimeEnd = formatTime(dateTo);

  const differentTimeStartEnd = formatTime(dayjs(dateTo).diff(dateFrom));

  const favoriteClassName = isFavorite ? 'event__favorite-btn--active' : 'event__favorite-btn';


  const htmlOffers = offers ? offers.map((offerId) => (`
  <li class="event__offer">
    <span class="event__offer-title">${getOfferById(offerId).title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${getOfferById(offerId).price}</span>
  </li>`)).join('') : '';

  return (
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dateFrom}">${pointDateFrom}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFrom}">${pointTimeStart}</time>
          &mdash;
          <time class="event__end-time" datetime="${pointDateTo}">${pointTimeEnd}</time>
        </p>
        <p class="event__duration">${differentTimeStartEnd}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
      ${htmlOffers}
      </ul>
      <button class="event__favorite-btn ${favoriteClassName}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
};

export default class PointView extends AbstractView {
  #point = null;

  constructor(point) {
    super();
    this.#point = point;
  }

  get template() {
    return createPointTemplate(this.#point);
  }

  setEditClickHandler = (callback) => {
    this._callback.editClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  };

  setFavoriteClickHandler = (callback) => {
    this._callback.favoriteClick = callback;
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  };

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.editClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.favoriteClick();
  };
}
