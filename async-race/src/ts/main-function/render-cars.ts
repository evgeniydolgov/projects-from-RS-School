import { RaceAdress, winInfo } from '../basic-page-info';
import { GettingCarInterface } from '../interfaces/car';
import creatingCar from '../patterns/creating-car.html';

export async function drawsPagination() {
  const response = await fetch(`${RaceAdress.urlPath}${RaceAdress.allCarGarage}`);
  const CarInGarage = await response.json();
  winInfo.allCars = Object.assign([], CarInGarage);
  RaceAdress.carInGarage = CarInGarage.length;
  const startNum = RaceAdress.pageNumber * 7;
  return CarInGarage.splice(startNum, 7);
}

function carToHTML() {
  const insertCar = document.querySelector('#car-race');
  if (insertCar === null) {
    throw new Error("Can't find elment in document");
  }
  insertCar.insertAdjacentHTML('beforeend', creatingCar);
}

function getColorCar(index: number, id: number, color: string, name: string) {
  const carInGarage = document.querySelectorAll('#car-svg') as NodeListOf<Element>;
  (<SVGAElement>carInGarage[index]).dataset.carId = `${id}`;
  (<SVGAElement>carInGarage[index]).dataset.carColor = `${color}`;
  (<SVGAElement>carInGarage[index]).dataset.carName = `${name}`;
  const carSvg = (<SVGAElement>carInGarage[index]).firstElementChild as SVGAElement;
  carSvg.style.fill = `${color}`;
}

function getNameCar(index: number, name: string) {
  const carInGarage = document.querySelectorAll('#car-name') as NodeListOf<Element>;
  carInGarage[index].textContent = `${name}`;
}

function addIdToButtons(index: number, id: number, carName: string) {
  const deleteCarBtn = document.querySelectorAll('#delete_button') as NodeListOf<Element>;
  const selectCarBtn = document.querySelectorAll('#select_button') as NodeListOf<Element>;
  const startCarBtn = document.querySelectorAll('#startBtn') as NodeListOf<Element>;
  const stopCarBtn = document.querySelectorAll('#stopBtn') as NodeListOf<Element>;
  (<HTMLElement>deleteCarBtn[index]).dataset.carId = `${id}`;
  (<HTMLElement>selectCarBtn[index]).dataset.carId = `${id}`;
  (<HTMLElement>selectCarBtn[index]).dataset.carName = `${carName}`;
  (<HTMLElement>startCarBtn[index]).dataset.carId = `${id}`;
  (<HTMLElement>stopCarBtn[index]).dataset.carId = `${id}`;
  (<HTMLElement>stopCarBtn[index]).dataset.carIndex = `${index}`;
}

export async function getCarInGarage() {
  const paginationPage = await drawsPagination();
  paginationPage.forEach((el: GettingCarInterface, index: number) => {
    carToHTML();
    getColorCar(index, el.id, el.color, el.name);
    getNameCar(index, el.name);
    addIdToButtons(index, el.id, el.name);
    RaceAdress.raceWidth[index] = {
      [el.id]: `${document.documentElement.clientWidth - 180}`,
    };
  });
}
