/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RaceAdress, winInfo } from '../basic-page-info';
import { GettingCarInterface } from '../interfaces/car';
import { OneWinCar } from '../interfaces/winners';
import creatingWinList from '../patterns/string-winlist.html';

async function createdWinList() {
  const winString = document.querySelector('#winTable') as HTMLElement;
  winString.innerHTML = ''; // спорное решение, нужен рендер таблице не зависящий от рендера гаража
  const responseCar = await fetch(`${RaceAdress.urlPath}${RaceAdress.allCarGarage}`);
  const carInGarage = await responseCar.json();
  const response = await fetch(`${RaceAdress.urlPath}${winInfo.showWinners}`);
  const winList = await response.json();

  for (let i = 0; i < winList.length; i += 1) {
    carInGarage.find((el: GettingCarInterface) => {
      if (el.id === winList[i].id) {
        return Object.assign(winList[i], el);
      }
      return 0;
    });
  }

  return winList;
}

async function creatOneTableString() {
  const winString = document.querySelector('#winTable') as HTMLElement;
  winString.insertAdjacentHTML('beforeend', creatingWinList);
}

function creatWinPosition(position: number) {
  const winPosition = document.querySelectorAll('#winPosition') as NodeListOf<HTMLTableElement>;
  (<HTMLTableElement>winPosition[position]).textContent = `${position + 1}`;
}

function creatImgWinCar(index: number, color: string) {
  const miniCarsImg = document.querySelectorAll('#car-mini-svg') as NodeListOf<SVGAElement>;
  const carSvg = (<SVGAElement>miniCarsImg[index]).firstElementChild as SVGAElement;
  carSvg.style.fill = `${color}`;
}

function creatNameWinCar(index: number, name: string) {
  const winnerName = document.querySelectorAll('#winName') as NodeListOf<HTMLTableElement>;
  (<HTMLTableElement>winnerName[index]).textContent = `${name}`;
}

function creatWinsNumber(index: number, wins: string) {
  const winCounts = document.querySelectorAll('#winNum') as NodeListOf<HTMLTableElement>;
  (<HTMLTableElement>winCounts[index]).textContent = `${wins}`;
}

function creatTime(index: number, time: string) {
  const timerOfWinners = document.querySelectorAll('#winTime') as NodeListOf<HTMLTableElement>;
  (<HTMLTableElement>timerOfWinners[index]).textContent = `${time} sec`;
}

export async function renderWinTable() {
  const winList = await createdWinList();
  winList.sort((a: OneWinCar, b: OneWinCar) => (Number(a.time) > Number(b.time) ? 1 : -1));
  winList.forEach((el: OneWinCar, index: number) => {
    console.log(el);
    creatOneTableString();
    creatWinPosition(index);
    creatImgWinCar(index, el.color);
    creatNameWinCar(index, el.name);
    creatWinsNumber(index, el.wins);
    creatTime(index, el.time);
  });
}
