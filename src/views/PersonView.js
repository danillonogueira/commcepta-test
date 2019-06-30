import { View } from './View';
import { changeExtension } from '../helpers/ChangeExtension';

export class PersonView extends View {
  template(model) {
    return `
        <img src="${require(`../assets/${changeExtension(model.foto)}`)}">
        <div class="display__info">
          <ul>
            <li>NOME:</li>
            <li>CARGO:</li>
            <li>IDADE:</li>
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