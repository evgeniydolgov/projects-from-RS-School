import { RaceAdress } from "../basic-page-info";
import { iGettingCar } from "../interfaces/car";
import creatingCar from '../patterns/creating-car.html'

export async function getCarInGarage() {
    const paginationPage = await drawsPagination();
    paginationPage.forEach((el: iGettingCar, index: number) => {
        carToHTML();
        getColorCar(index, el.id, el.color);
        getNameCar(index, el.name);
        addIdToButtons(index, el.id, el.name);
    })
}

export async function drawsPagination() {
    const response = await fetch(`${RaceAdress.urlPath}${RaceAdress.allCarGarage}`);
    const CarInGarage = await response.json();
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

function getColorCar(index: number, id: number, color: string) {
    const carInGarage = document.querySelectorAll('#car-svg') as NodeListOf<Element>;
    (<SVGAElement>carInGarage[index]).dataset.carId = `${id}`;
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
    (<HTMLElement>deleteCarBtn[index]).dataset.carId = `${id}`;
    (<HTMLElement>selectCarBtn[index]).dataset.carId = `${id}`;
    (<HTMLElement>selectCarBtn[index]).dataset.carName = `${carName}`;
}