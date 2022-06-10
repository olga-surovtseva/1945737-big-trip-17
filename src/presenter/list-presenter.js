import SortView from '../view/sort-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import ListEmptyView from '../view/list-empty-view.js';
import TripInfoView from '../view/trip-info-view.js';
import { render, RenderPosition } from '../framework/render.js';
import PointPresenter from './point-presenter.js';

const tripMainElement = document.querySelector('.trip-main');

export default class ListPresenter {

  #listContainer = null;
  #pointsModel = null;

  #tripEventsListComponent = new TripEventsListView();
  #listEmptyComponent = new ListEmptyView();
  #sortComponent = new SortView();
  #tripInfoComponent = new TripInfoView();

  #listPoints = [];

  //зачем здесь конструктор?
  constructor(listContainer, pointsModel) {
    this.#listContainer = listContainer;
    this.#pointsModel = pointsModel;
  }

  init = () => {
    this.#listPoints = [...this.#pointsModel.points];

    this.#renderTripEventsList();
  };

  //что здесь происходит?
  #renderTrip = (from, to) => {
    this.#listPoints.slice(from, to).forEach((point) => this.#renderPoint(point));
  };

  #renderTripEventsList = () => {
    render(this.#tripEventsListComponent, this.#listContainer);

    if(this.#listPoints.length === 0) {
      this.#renderListEmpty();
      return;
    }

    this.#renderTripInfo();
    this.#renderSort();
    this.#renderTrip();
  };

  #renderTripInfo = () => {
    render(this.#tripInfoComponent, tripMainElement, RenderPosition.AFTERBEGIN);
  };

  #renderSort = () => {
    render(this.#sortComponent, this.#listContainer);
  };

  #renderListEmpty = () => {
    render(this.#listEmptyComponent, this.#listContainer);
  };

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(this.#tripEventsListComponent.element);
    pointPresenter.init(point);
  };
}
