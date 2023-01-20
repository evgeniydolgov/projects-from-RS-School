import { iRaceAdress } from "./interfaces/address";

export const RaceAdress: iRaceAdress = {
    urlPath: 'http://127.0.0.1:3000',
    allCarGarage: '/garage',
    limitCar: '?_limit=',
    pageNumber: 0,
    carInGarage: 0
}


export function shakerCarName() {
    const carCompany = [
        'Audi', 'BMW', 'Ford', 'Honda', 'Hyundai', 'Kia', 'Lada', 'Mazda','Mercedes-Benz', 'Mitsubishi', 'Nissan', 'Renault', 'Skoda', 'Toyota', 'Volkswagen', 'Acura', 'Tesla'
    ];
    const carModel = [
        'Q5', 'E38', 'Mustang', 'Accord', 'Solaris', 'RIO', 'Granta,', 'CX-7', 'AMG', 'Lancer', 'Qashqai', 'Logan', 'Octavia', 'Corolla', 'Polo', 'NSX', 'Model S'
    ];
    const firstNum = Math.floor(Math.random()*(carCompany.length));
    const secondNum = Math.floor(Math.random()*(carModel.length));
    const randomColor = Math.floor(Math.random()*(999999))

    return {name: `${carCompany[firstNum]} ${carModel[secondNum]}`, color: `#${randomColor}`}
}


