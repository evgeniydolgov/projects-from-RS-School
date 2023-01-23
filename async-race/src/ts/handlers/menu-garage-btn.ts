/* eslint-disable @typescript-eslint/no-unused-vars */
import { settingChangeCar } from '../main-function/changes-car';
import { createdRandomArr, settingNewCar } from '../main-function/creat-new-car';
import { startRaceFunc, stopRaceFunc } from '../main-function/race';

function eventWinnersBtn() {
  const winnerListBtn = document.querySelector('#winners-btn') as HTMLButtonElement;
  const tableSection = document.querySelector('#table-section') as HTMLElement;
  const garagePage = document.querySelector('#garage-page') as HTMLElement;
  winnerListBtn.addEventListener('click', () => {
    garagePage.style.display = 'none';
    tableSection.style.display = 'block';
  });
}

function eventGarageBtn() {
  const winnerListBtn = document.querySelector('#garage-btn') as HTMLButtonElement;
  const garagePage = document.querySelector('#garage-page') as HTMLElement;
  const tableSection = document.querySelector('#table-section') as HTMLElement;
  winnerListBtn.addEventListener('click', () => {
    garagePage.style.display = 'block';
    tableSection.style.display = 'none';
  });
}

function eventCreatBtn() {
  const insertCar = document.querySelector('#creating_btn') as HTMLButtonElement;
  insertCar.addEventListener('click', () => {
    settingNewCar();
  });
}

function eventChangeBtn() {
  const changeCar = document.querySelector('#change_btn') as HTMLButtonElement;
  changeCar.addEventListener('click', () => {
    settingChangeCar();
  });
}

function eventGenerationBtn() {
  const creat100Cars = document.querySelector('#creats100cars') as HTMLButtonElement;
  creat100Cars.addEventListener('click', () => {
    createdRandomArr();
  });
}

function eventStartRaceBtn() {
  const startRace = document.querySelector('#race-start') as HTMLButtonElement;
  startRace.addEventListener('click', () => {
    startRaceFunc();
  });
}

function eventStopRaceBtn() {
  const startRace = document.querySelector('#race-start') as HTMLButtonElement;
  const stopRace = document.querySelector('#race-stop') as HTMLButtonElement;
  stopRace.addEventListener('click', () => {
    stopRaceFunc();
    startRace.classList.toggle('disable-change');
    stopRace.classList.toggle('disable-change');
  });
}

export function wrapperEvent() {
  eventCreatBtn();
  eventChangeBtn();
  eventGenerationBtn();
  eventStartRaceBtn();
  eventStopRaceBtn();
  eventWinnersBtn();
  eventGarageBtn();
}
