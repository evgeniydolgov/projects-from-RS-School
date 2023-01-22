import './index.html';
import './index.scss';
import { getCarInGarage } from './ts/main-function/render-cars';
import { garageMenuToHTML } from './ts/main-function/render-garage';
import { handlesForCar } from './ts/handlers/car-btn';
import {
  eventChangeBtn,
  eventCreatBtn,
  eventGarageBtn,
  eventGenerationBtn,
  eventStartRaceBtn,
  eventStopRaceBtn,
  eventWinnersBtn,
} from './ts/handlers/menu-garage-btn';
import { nextPage, prevPage } from './ts/handlers/pagination-btn';
import { renderWinTable } from './ts/main-function/render-winlist';

export async function renderPage() {
  await garageMenuToHTML();
  await getCarInGarage();
  handlesForCar();
  eventCreatBtn();
  eventChangeBtn();
  nextPage();
  prevPage();
  eventGenerationBtn();
  eventStartRaceBtn();
  eventStopRaceBtn();
  eventWinnersBtn();
  eventGarageBtn();
  renderWinTable();
}

window.addEventListener('DOMContentLoaded', () => {
  renderPage();
});
