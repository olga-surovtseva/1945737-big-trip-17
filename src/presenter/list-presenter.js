import SortView from '../view/sort-view.js';
import PointView from '../view/point-view.js';
import FormEditPointView from '../view/form-edit-point-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import {render} from '../render.js';
import { generateOffers } from '../mock/offer.js';


export default class ListPresenter {
  tripEventsList = new TripEventsListView();

  init = (listContainer, pointsModel) => {
    this.listContainer = listContainer;
    this.pointsModel = pointsModel;
    this.listPoints = [...this.pointsModel.getPoints()];

    render(new SortView(), this.listContainer);
    render(this.tripEventsList, this.listContainer);
    render(new FormEditPointView(this.listPoints[0]), this.tripEventsList.getElement());
    const allOffers = generateOffers;


    for (let i = 1; i < this.listPoints.length; i++) {
      render(new PointView(this.listPoints[i], allOffers), this.tripEventsList.getElement());
    }
  };
}
