import { renderPage } from '../..';
import { RaceAdress } from '../basic-page-info';

export function nextPage() {
  const nextPages = document.querySelector('#next_page');
  if (!(nextPages instanceof HTMLButtonElement)) throw new Error('Next button don`t work');
  nextPages.addEventListener('click', () => {
    if (Math.ceil(RaceAdress.carInGarage / 7) > RaceAdress.pageNumber + 1) {
      RaceAdress.pageNumber += 1;
      renderPage();
    }
  });
}

export function prevPage() {
  const prevsPage = document.querySelector('#prev_page');
  if (!(prevsPage instanceof HTMLButtonElement)) throw new Error('Next button don`t work');
  prevsPage.addEventListener('click', () => {
    if (RaceAdress.pageNumber > 0) {
      RaceAdress.pageNumber -= 1;
      renderPage();
    }
  });
}
