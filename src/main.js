import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import {RenderPosition, render} from './render.js';
import ListPresenter from './presenter/list-presenter.js';

const tripMainElement = document.querySelector('.trip-main');
const tripFilterElement = tripMainElement.querySelector('.trip-main__trip-controls');
const tripEventsElement = document.querySelector('.trip-events');

const listPresenter = new ListPresenter();


render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripFilterElement);

listPresenter.init(tripEventsElement);
