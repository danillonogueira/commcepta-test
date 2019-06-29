import api from './api/dados.json';
import './styles/main.scss';

const $ = document.querySelector.bind(document);
const list = $('.list');

function formatPhoto(name) {
  return `${name.slice(0, name.length - 4)}.png`;
}

function clickDev(event) {
  if (event.target.getAttribute('data-index')) {
    const id = parseInt(event.target.getAttribute('data-index'));
    let dev = null;

    api.forEach((developer) => {
      if (developer.id === id) {
        dev = developer;
      }
    });   
    $('.display').innerHTML = `
      <img src="${require(`./assets/${formatPhoto(dev.foto)}`)}">
      <div class="display__info">
        <ul>
          <li>NOME:</li>
          <li>CARGO:</li>
          <li>IDADE:</li>
        </ul>
        <ul>
          <li>${dev.nome}</li>
          <li>${dev.cargo}</li>
          <li>${dev.idade}</li>
        </ul>
      </div>
    `
  }
}

list.innerHTML =
`
  ${
    api.map((developer) => {
      return `
        <label>
          <input type="radio" name="developers" data-index="${developer.id}">
          <div class="card" id="${developer.nome}">          
            <img src="${require(`./assets/${formatPhoto(developer.foto)}`)}">
            <div data-index="${developer.id}">        
              <ul data-index="${developer.id}">
                <li>${developer.nome}</li>
                <li>${developer.cargo}</li>          
              </ul>
            </div>
          </div>
        </label>
      `
    })
    .join('')
  }
`;

$('.list').addEventListener("change", clickDev);