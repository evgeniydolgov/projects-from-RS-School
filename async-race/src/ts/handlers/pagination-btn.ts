import { renderPage } from "../..";
import { RaceAdress } from "../basic-page-info";

export function nextPage() {
    const nextPage = document.querySelector('#next_page');
    if (!(nextPage instanceof HTMLButtonElement)) throw new Error("Next button don`t work");
    nextPage.addEventListener('click', () => {
        if (Math.ceil(RaceAdress.carInGarage / 7) > RaceAdress.pageNumber + 1) {
            RaceAdress.pageNumber += 1;
            renderPage();
        }
    })
}

export function prevPage() {
    const nextPage = document.querySelector('#prev_page');
    if (!(nextPage instanceof HTMLButtonElement)) throw new Error("Next button don`t work");
    nextPage.addEventListener('click', () => {
        if (RaceAdress.pageNumber > 0) {
            RaceAdress.pageNumber -= 1
            renderPage();
        }
    })
}
