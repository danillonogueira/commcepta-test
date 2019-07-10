import { $ } from '../helpers/Alias';

// Template engine
export class View {
  constructor(selector) {
    this.element = $(selector);
  }

  update(model) {
    this.element.innerHTML = this.template(model);
  }
}