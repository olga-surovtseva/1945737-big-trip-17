import SortView from '../view/sort-view.js';
import ListView from '../view/list-view.js';
import PageBodyContainerView from '../view/page-body-container-view.js';
import FormNewPointView from '../view/form-new-point-view.js';
import SectionTripEventsView from '../view/section-trip-events-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import {render} from '../render.js';

export default class ListPresenter {
  pageBody = new PageBodyContainerView();
  tripEvents = new SectionTripEventsView();
  tripEventsList = new TripEventsListView();

  init = (listContainer) => {
    this.listContainer = listContainer;

    render(this.pageBody, this.listContainer);
    render(this.tripEvents, this.pageBody.getElement());
    render(new SortView(), this.tripEvents.getElement());
    render(this.tripEventsList, this.tripEvents.getElement());
    render(new FormNewPointView(), this.tripEventsList.getElement());
    render(this.tripEvents, this.pageBody.getElement());

    for (let i = 0; i < 4; i++) {
      render(new ListView(), this.tripEventsList.getElement());
    }
  };
}
