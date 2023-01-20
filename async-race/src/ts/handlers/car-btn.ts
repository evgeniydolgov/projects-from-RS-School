// import { animation } from "../garage-functioun/car-animation";
import { changeMenuActiv } from "../garage-functioun/changes-car";
import { deleteCar } from "../garage-functioun/delete-car";

export function handlesForCar () {
    const insertCar = document.querySelector('#car-race') as HTMLElement;

    insertCar.addEventListener('click', (event: Event) => {
        const clickedElem = event.target as HTMLElement;
        // const carpp = clickedElem.parentNode
        // if (carpp instanceof HTMLElement) {
        //     console.log(carpp.children[2].children[0].children[0]);
        //     animation((<SVGAElement>carpp.children[2].children[0].children[0]));
        // }
        
        
        if(clickedElem.id === 'delete_button'){
            deleteCar((<string>clickedElem.dataset.carId))
        }

        if (clickedElem.id === 'select_button') {
            changeMenuActiv((<string>clickedElem.dataset.carId),(<string>clickedElem.dataset.carName))
        }
    })
}