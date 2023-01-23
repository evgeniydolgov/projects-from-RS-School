import { RaceAdress, winInfo } from '../basic-page-info';
import { renderWinTable } from './render-winlist';

export async function deleteWinner(id: string) {
  const car = winInfo.winListMemory.find((el) => String(el.id) === id);
  if (car) {
    await fetch(`${RaceAdress.urlPath}${winInfo.showWinners}/${id}`, {
      method: 'DELETE',
    });
  }
}

async function updateWinner(id: string, winNum: string, timeNum: number) {
  const times = timeNum;
  const winsNum = Number(winNum);
  fetch(`${RaceAdress.urlPath}${winInfo.showWinners}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      wins: winsNum,
      time: times,
    }),
  });
}

async function createWinner(id: string, timeNum: number) {
  const newId = +id;
  fetch(`${RaceAdress.urlPath}${winInfo.showWinners}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: newId,
      wins: 1,
      time: timeNum,
    }),
  });
}

export function addNewWinner(id: string, timers: number, name: string | undefined) {
  const winMassage = document.querySelector('#win_massage') as HTMLElement;
  const car = winInfo.winListMemory.find((el) => String(el.id) === id);

  let bestTime = Math.ceil(timers / 1000);

  if (car !== undefined) {
    car.wins += 1;
    if (+bestTime > +car.time) {
      bestTime = +car.time;
    }
    updateWinner(car.id, car.wins, bestTime);
    renderWinTable();
  } else {
    createWinner(id, bestTime);
    renderWinTable();
  }
  winMassage.textContent = `THE WINNER IS ${name} WITH ${bestTime} sec`;
  setTimeout(() => {
    winMassage.innerHTML = '';
  }, 5000);
  RaceAdress.canWin = false;
}
