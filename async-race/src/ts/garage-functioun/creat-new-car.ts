import { renderPage } from "../..";
import { RaceAdress, shakerCarName } from "../basic-page-info";

export function settingNewCar() {
    const inputNewName = document.querySelector('#newNameCar') as HTMLInputElement;
    const creatingNewColor = document.querySelector('#creating-color') as HTMLInputElement;
    if (inputNewName.value) {
        postNewCar(inputNewName.value, creatingNewColor.value)
        renderPage();
    }
}

async function postNewCar(carName: string, carColor: string) {
    const respone = fetch(`${RaceAdress.urlPath}${RaceAdress.allCarGarage}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: `${carName}`,
            color: `${carColor}`
        })
    })
    return respone;
}

export function createdRandomArr() {
    const randomArr = new Array(100).fill('1');
    randomArr.map(el => {
        el = shakerCarName();
        const respone = fetch(`${RaceAdress.urlPath}${RaceAdress.allCarGarage}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...el
            })
        })
        return respone;
    });
    renderPage()
}



