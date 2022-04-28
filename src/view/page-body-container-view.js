import {createElement} from '../render.js';

const createPageBodyTemplate = () => (
  '<div class="page-body__container"></div>'
);

export default class PageBodyContainerView {
  getTemplate() {
    return createPageBodyTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
