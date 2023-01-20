import { renderPage } from "../..";
import { RaceAdress } from "../basic-page-info";

export function changeMenuActiv(id: string, carName: string) {
    const changeMenu = document.querySelector('#change-car') as HTMLElement;
    const changeName = document.querySelector('#changeNameCar') as HTMLInputElement;
    changeMenu.classList.add('activ-change');
    changeMenu.dataset.carId = id;
    changeName.value = carName;
}

export async function settingChangeCar() {
    const changeMenu = document.querySelector('#change-car') as HTMLElement;
    const changeName = document.querySelector('#changeNameCar') as HTMLInputElement;
    const changeColor = document.querySelector('#change-color') as HTMLInputElement;

    const response = await fetch(`${RaceAdress.urlPath}${RaceAdress.allCarGarage}/${changeMenu.dataset.carId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: `${changeName.value}`,
            color: `${changeColor.value}`
        })
    });
    renderPage();
    return response;
}