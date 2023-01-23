import { renderPage } from '../..';
import { RaceAdress, shakerCarName } from '../basic-page-info';

async function postNewCar(carName: string, carColor: string) {
  const respone = fetch(`${RaceAdress.urlPath}${RaceAdress.allCarGarage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: `${carName}`,
      color: `${carColor}`,
    }),
  });
  return respone;
}

export function settingNewCar() {
  const inputNewName = document.querySelector('#newNameCar') as HTMLInputElement;
  const creatingNewColor = document.querySelector('#creating-color') as HTMLInputElement;
  if (inputNewName.value) {
    postNewCar(inputNewName.value, creatingNewColor.value);
    renderPage();
  }
}

export function createdRandomArr() {
  const randomArr = new Array(100).fill('');

  for (let i = 0; i < randomArr.length; i += 1) {
    const newCarObj = shakerCarName();
    randomArr[i] = newCarObj;
    fetch(`${RaceAdress.urlPath}${RaceAdress.allCarGarage}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...randomArr[i],
      }),
    });
  }
  renderPage();
}
