import SortView from '../view/sort-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import ListEmptyView from '../view/list-empty-view.js';
import TripInfoView from '../view/trip-info-view.js';
import { render, RenderPosition } from '../framework/render.js';
import PointPresenter from './point-presenter.js';
import { updateItem } from '../utils/common.js';
import { sortByPrice, sortByTime, sortByDay} from '../utils/point.js';
import { SortType } from '../const.js';

const tripMainElement = document.querySelector('.trip-main');

export default class ListPresenter {

  #listContainer = null;
  #pointsModel = null;

  #tripEventsListComponent = new TripEventsListView();
  #listEmptyComponent = new ListEmptyView();
  #sortComponent = new SortView();
  #tripInfoComponent = new TripInfoView();

  #listPoints = [];
  #pointPresenter = new Map();
  #currentSortType = SortType.DAY;

  constructor(listContainer, pointsModel) {
    this.#listContainer = listContainer;
    this.#pointsModel = pointsModel;
  }

  init = () => {
    this.#listPoints = [...this.#pointsModel.points];
    this.#sortPoints(this.#currentSortType);
    this.#renderPoints();
  };

  #renderTrip = (from, to) => {
    this.#listPoints.slice(from, to).forEach((point) => this.#renderPoint(point));
  };

  #renderPoints = () => {
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
    render(this.#sortComponent, this.#tripEventsListComponent.element, RenderPosition.AFTERBEGIN);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
  };

  #renderListEmpty = () => {
    render(this.#listEmptyComponent, this.#listContainer);
  };

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(this.#tripEventsListComponent.element, this.#handlePointChange, this.#handleModeChange);
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  };

  #clearPointList = () => {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
  };

  #handlePointChange = (updatedPoint) => {
    this.#listPoints = updateItem(this.#listPoints, updatedPoint);
    this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

  #sortPoints = (sortType) => {
    switch (sortType) {
      case SortType.DAY:
        this.#listPoints.sort(sortByDay);
        break;
      case SortType.TIME:
        this.#listPoints.sort(sortByTime);
        break;
      case SortType.PRICE:
        this.#listPoints.sort(sortByPrice);
        break;
    }
    this.#currentSortType = sortType;
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderPoints();
  };
}
