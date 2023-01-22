import { getSpeedTime, startAnimation, stopAnimation } from '../main-function/car-animation';
import { changeMenuActiv } from '../main-function/changes-car';
import { deleteCar } from '../main-function/delete-car';

export function handlesForCar() {
  const insertCar = document.querySelector('#car-race') as HTMLElement;

  insertCar.addEventListener('click', async (event: Event) => {
    const clickedElem = event.target as HTMLElement;

    if (clickedElem.id === 'startBtn') {
      const time = await getSpeedTime(<string>clickedElem.dataset.carId);
      startAnimation(<string>clickedElem.dataset.carId, time);
      clickedElem.classList.remove('activ-change');
      clickedElem.classList.add('disable-change');
      (<HTMLButtonElement>clickedElem.nextElementSibling).classList.remove('disable-change');
      (<HTMLButtonElement>clickedElem.nextElementSibling).classList.add('activ-change');
    }

    if (clickedElem.id === 'stopBtn') {
      await stopAnimation(<string>clickedElem.dataset.carId, <string>clickedElem.dataset.carIndex);
      clickedElem.classList.remove('activ-change');
      clickedElem.classList.add('disable-change');
      (<HTMLButtonElement>clickedElem.previousElementSibling).classList.remove('disable-change');
      (<HTMLButtonElement>clickedElem.previousElementSibling).classList.add('activ-change');
    }

    if (clickedElem.id === 'delete_button') {
      deleteCar(<string>clickedElem.dataset.carId);
    }

    if (clickedElem.id === 'select_button') {
      changeMenuActiv(<string>clickedElem.dataset.carId, <string>clickedElem.dataset.carName);
    }
  });
}
