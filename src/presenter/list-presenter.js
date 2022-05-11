import SortView from '../view/sort-view.js';
import PointView from '../view/point-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import FormEditPointView from '../view/form-edit-point-view.js';
import {render} from '../render.js';


export default class ListPresenter {

  #listContainer = null;
  #pointsModel = null;

  #tripEventsList = new TripEventsListView();

  #listPoints = [];

  init = (listContainer, pointsModel) => {
    this.#listContainer = listContainer;
    this.#pointsModel = pointsModel;
    this.#listPoints = [...this.#pointsModel.points];

    render(new SortView(), this.#listContainer);
    render(this.#tripEventsList, this.#listContainer);

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

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
    });

    pointEditComponent.element.querySelector('.event__save-btn').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
    });

    render(pointComponent, this.#tripEventsList.element);
  };
}
