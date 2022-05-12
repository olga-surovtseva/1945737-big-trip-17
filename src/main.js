import FilterView from './view/filter-view.js';
import { render } from './render.js';
import ListPresenter from './presenter/list-presenter.js';
import PointModel from './model/point-model.js';


const tripMainElement = document.querySelector('.trip-main');
const tripFilterElement = tripMainElement.querySelector('.trip-main__trip-controls');
const tripEventsElement = document.querySelector('.trip-events');

const pointsModel = new PointModel();
const listPresenter = new ListPresenter();

render(new FilterView(), tripFilterElement);

listPresenter.init(tripEventsElement, pointsModel);
