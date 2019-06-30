import { $ } from './helpers/Alias';
import { Controller } from './core/Controller';
import './styles/main.scss';

const controller = new Controller();

$('.list').addEventListener("change", controller.personClick.bind(controller));