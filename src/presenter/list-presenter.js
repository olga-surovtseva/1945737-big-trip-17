import SortView from '../view/sort-view.js';
import PointView from '../view/point-view.js';
import FormEditPointView from '../view/form-edit-point-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import {render} from '../render.js';
import { offersArray } from '../mock/offer.js';

const allOffers = offersArray;

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
    render(new FormEditPointView(this.#listPoints[0]), this.#tripEventsList.element);

    this.#listPoints.forEach((point) => (
      render(new PointView(point, allOffers), this.#tripEventsList.element)
    ));
  };
}
