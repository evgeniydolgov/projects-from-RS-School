import { settingChangeCar } from "../garage-functioun/changes-car";
import { createdRandomArr, settingNewCar } from "../garage-functioun/creat-new-car";

export function eventCreatBtn () {
    const insertCar = document.querySelector('#creating_btn') as HTMLButtonElement;
    insertCar.addEventListener('click', () => {
        settingNewCar();
    })
}

export function eventChangeBtn () {
    const changeCar = document.querySelector('#change_btn') as HTMLButtonElement;
    changeCar.addEventListener('click', () => {
        settingChangeCar();
    })
}

export function eventGenerationBtn() {
    const creat100Cars = document.querySelector('#creats100cars') as HTMLButtonElement;
    creat100Cars.addEventListener('click', () => {
        createdRandomArr();
    })
}