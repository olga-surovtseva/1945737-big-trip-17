import FilterView from './view/filter-view.js';
import { render } from './framework/render.js';
import ListPresenter from './presenter/list-presenter.js';
import PointModel from './model/point-model.js';
import { filterTrip } from './mock/filter.js';

const tripMainElement = document.querySelector('.trip-main');
const tripFilterElement = tripMainElement.querySelector('.trip-main__trip-controls');
const tripEventsElement = document.querySelector('.trip-events');

const pointsModel = new PointModel();
const listPresenter = new ListPresenter(tripEventsElement, pointsModel);

const filters = filterTrip(pointsModel.points);

render(new FilterView(filters), tripFilterElement);

listPresenter.init();
