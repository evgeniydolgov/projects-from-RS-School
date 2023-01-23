import './index.html';
import './index.scss';
import { getCarInGarage } from './ts/main-function/render-cars';
import { garageMenuToHTML } from './ts/main-function/render-garage';
import { handlesForCar } from './ts/handlers/car-btn';
import { wrapperEvent } from './ts/handlers/menu-garage-btn';
import { nextPage, prevPage } from './ts/handlers/pagination-btn';
import { renderWinTable } from './ts/main-function/render-winlist';
import { eventWinListBtn } from './ts/handlers/wins-table-btn';

export async function renderPage() {
  await garageMenuToHTML();
  await getCarInGarage();
  handlesForCar();
  nextPage();
  prevPage();
  wrapperEvent();
  renderWinTable();
  eventWinListBtn();
}

window.addEventListener('DOMContentLoaded', () => {
  renderPage();
});
