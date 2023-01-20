import './index.html';
import './index.scss';
import { getCarInGarage } from './ts/garage-functioun/render-cars';
import { garageMenuToHTML } from './ts/garage-functioun/render-garage';
import { handlesForCar } from './ts/handlers/car-btn';
import { eventChangeBtn, eventCreatBtn, eventGenerationBtn } from './ts/handlers/menu-garage-btn';
import { nextPage, prevPage } from './ts/handlers/pagination-btn';

export function renderPage() {
    garageMenuToHTML();
    getCarInGarage();
    handlesForCar();
    eventCreatBtn ();
    eventChangeBtn();
    nextPage();
    prevPage();
    eventGenerationBtn();
}

window.addEventListener('DOMContentLoaded', () => {
    renderPage();
})
