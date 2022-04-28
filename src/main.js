import TripInfoView from './view/trip-info-main-view.js';
import FilterView from './view/filter-view.js';
import {render} from './render.js';
import ListPresenter from './presenter/list-presenter.js';

const tripMain = document.querySelector('.trip-main');
const tripFilterElement = tripMain.querySelector('.trip-main__trip-controls');
const pageBodyMain = document.querySelector('.page-body__page-main');
const listPresenter = new ListPresenter();

render(new TripInfoView(), tripMain);
render(new FilterView(), tripFilterElement);

listPresenter.init(pageBodyMain);
