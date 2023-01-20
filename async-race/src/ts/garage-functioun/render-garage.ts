import { RaceAdress } from '../basic-page-info';
import garageMenu from '../patterns/garage-page.html';


export async function garageMenuToHTML() {
    const insertPage = document.getElementById('body-application');
    if (insertPage === null) {
        throw new Error("Can't find elment in document");
    }
    insertPage.innerHTML = '';
    insertPage.insertAdjacentHTML('beforeend', garageMenu);

    const count = await allCarOnServer();
    if (count === null) {
        throw new Error('can`t get respons from server =(')
    }

    insertNumberAllCar(count);
    getGaragePage();
}

async function allCarOnServer() {
    const response = await fetch(`${RaceAdress.urlPath}${RaceAdress.allCarGarage}${RaceAdress.limitCar}1`, {
        method: 'HEAD',
    });
    const numAllCar = response.headers.get('X-Total-Count');
    return numAllCar
}

function insertNumberAllCar(coint: string) {
    const carInGarage = document.querySelector('#garage-info');
    if (carInGarage instanceof HTMLElement) {
        carInGarage.textContent = `In Garage ${coint}`;
    }
}

function getGaragePage() {
    const pageNumber = document.querySelector('#numberpage-info');
    if (pageNumber) pageNumber.textContent = `Page №${RaceAdress.pageNumber + 1}`
}

