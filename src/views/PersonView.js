import { View } from './View';
import { changeExtension } from '../helpers/ChangeExtension';

export class PersonView extends View {
  template(model) {
    return `
        <img src="${require(`../assets/${changeExtension(model.foto)}`)}">
        <div class="display__info">
          <ul>
            <li>nome:</li>
            <li>cargo:</li>
            <li>idade:</li>
          </ul>
          <ul>
            <li>${model.nome}</li>
            <li>${model.cargo}</li>
            <li>${model.idade}</li>
          </ul>
        </div>
      `;
  }
}