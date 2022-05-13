import SortView from '../view/sort-view.js';
import PointView from '../view/point-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import FormEditPointView from '../view/form-edit-point-view.js';
import ListEmptyView from '../view/list-empty-view.js';
import TripInfoView from '../view/trip-info-view.js';
import { render, RenderPosition } from '../framework/render.js';

const tripMainElement = document.querySelector('.trip-main');

export default class ListPresenter {

  #listContainer = null;
  #pointsModel = null;

  #tripEventsList = new TripEventsListView();

  #listPoints = [];

  init = (listContainer, pointsModel) => {
    this.#listContainer = listContainer;
    this.#pointsModel = pointsModel;
    this.#listPoints = [...this.#pointsModel.points];

    if(this.#listPoints.length === 0) {
      render (new ListEmptyView(), this.#listContainer);
    } else {
      render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
      render(new SortView(), this.#listContainer);
      render(this.#tripEventsList, this.#listContainer);
    }

    this.#listPoints.forEach((point) => (
      this.#renderPoint(point)
    ));
  };

  #renderPoint = (point) => {
    const pointComponent = new PointView(point);
    const pointEditComponent = new FormEditPointView(point);

    const replacePointToForm = () => {
      this.#tripEventsList.element.replaceChild(pointEditComponent.element, pointComponent.element);
    };

    const replaceFormToPoint = () => {
      this.#tripEventsList.element.replaceChild(pointComponent.element, pointEditComponent.element);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    pointEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    pointEditComponent.element.querySelector('.event__save-btn').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(pointComponent, this.#tripEventsList.element);
  };
}
