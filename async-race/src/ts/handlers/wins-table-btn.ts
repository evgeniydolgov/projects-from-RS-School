import { winInfo } from '../basic-page-info';
import { renderWinTable } from '../main-function/render-winlist';

function changeWinsFilter() {
  const wins = document.querySelector('#wins_counter') as HTMLTableElement;
  const time = document.querySelector('#time_table') as HTMLTableElement;
  wins.addEventListener('click', () => {
    wins.classList.add('activ_filter');
    time.classList.remove('activ_filter');
    winInfo.changeFilter = 'wins';
    renderWinTable();
  });
}

function changeTimeFilter() {
  const wins = document.querySelector('#wins_counter') as HTMLTableElement;
  const time = document.querySelector('#time_table') as HTMLTableElement;
  time.addEventListener('click', () => {
    wins.classList.remove('activ_filter');
    time.classList.add('activ_filter');
    winInfo.changeFilter = 'time';
    renderWinTable();
  });
}

function nextWinPage() {
  const nextWinBtn = document.querySelector('#next_winpage') as HTMLButtonElement;
  nextWinBtn.addEventListener('click', () => {
    if (Math.floor(winInfo.maxWinPage / 10) > winInfo.winPageNumber) {
      winInfo.winPageNumber += 1;
      renderWinTable();
    }
  });
}

function prevWinPage() {
  const prevWinBtn = document.querySelector('#prev_winpage') as HTMLButtonElement;
  prevWinBtn.addEventListener('click', () => {
    if (winInfo.winPageNumber > 0) {
      winInfo.winPageNumber -= 1;
      renderWinTable();
    }
  });
}

export function eventWinListBtn() {
  prevWinPage();
  nextWinPage();
  changeWinsFilter();
  changeTimeFilter();
}
