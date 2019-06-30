import { View } from './View';
import { changeExtension } from '../helpers/ChangeExtension';

export class ListView extends View {
  template() {
    return `
      ${
        require('../mocks/dados').map((person) => {
          return `
            <label>
              <input 
                type="radio" 
                name="developers" 
                data-index="${person.id}"
              >
              <div 
                class="card" 
                id="${person.nome}"
              >          
                <img src="${require(`../assets/${changeExtension(person.foto)}`)}">
                <div data-index="${person.id}">        
                  <ul data-index="${person.id}">
                    <li>${person.nome}</li>
                    <li>${person.cargo}</li>          
                  </ul>
                </div>
              </div>
            </label>
          `
        })
        .join('')
      }
    `
  }
}