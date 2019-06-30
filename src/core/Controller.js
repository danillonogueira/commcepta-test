import { PersonView } from '../views/PersonView';
import { ListView } from '../views/ListView';

export class Controller {
  constructor() {
    this._listView = new ListView('.list');
    this._listView.update();
    this._personView = new PersonView('.display');
  }

  /**
   * Checks whether user clicked on a person
   * and displays it.
   */
  personClick(event) {
    if (event.target.getAttribute('data-index')) {
      const id = parseInt(event.target.getAttribute('data-index'));
      let dev = null;
  
      require('../mocks/dados').forEach((developer) => {
        if (developer.id === id) {
          dev = developer;
        }
      });   
      this._personView.update(dev);
    }
  }
}