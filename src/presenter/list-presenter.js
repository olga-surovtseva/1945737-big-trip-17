import SortView from '../view/sort-view.js';
import ListView from '../view/list-view.js';
import FormNewPointView from '../view/form-new-point-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import {render} from '../render.js';

export default class ListPresenter {
  tripEventsList = new TripEventsListView();

  init = (listContainer) => {
    this.listContainer = listContainer;

    render(new SortView(), this.listContainer);
    render(this.tripEventsList, this.listContainer);
    render(new FormNewPointView(), this.tripEventsList.getElement());

    for (let i = 0; i < 4; i++) {
      render(new ListView(), this.tripEventsList.getElement());
    }
  };
}
