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
    if (event.target.hasAttribute('data-index')) {
      const id = parseInt(event.target.getAttribute('data-index'));
      let personReference = null;
  
      require('../mocks/dados').forEach((person) => {
        if (person.id === id) {
          personReference = person;
        }
      });   
      this._personView.update(personReference);
    }
  }
}