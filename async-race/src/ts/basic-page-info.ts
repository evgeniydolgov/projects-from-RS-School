import { RaceAdressInterface } from './interfaces/address';
import { Winners } from './interfaces/winners';

export const RaceAdress: RaceAdressInterface = {
  urlPath: 'http://127.0.0.1:3000',
  allCarGarage: '/garage',
  limitCar: '?_limit=',
  status: '/engine?id=',
  startMovement: '&status=started',
  drive: '&status=drive',
  stopMovement: '&status=stopped',
  canWin: false,
  pageNumber: 0,
  carInGarage: 0,
  raceWidth: [],
};

export const winInfo: Winners = {
  showWinners: '/winners',
  winList: [],
  allCars: [],
};

export function shakerCarName() {
  const carCompany = [
    'Audi',
    'BMW',
    'Ford',
    'Honda',
    'Hyundai',
    'Kia',
    'Lada',
    'Mazda',
    'Mercedes-Benz',
    'Mitsubishi',
    'Nissan',
    'Renault',
    'Skoda',
    'Toyota',
    'Volkswagen',
    'Acura',
    'Tesla',
  ];
  const carModel = [
    'Q5',
    'E38',
    'Mustang',
    'Accord',
    'Solaris',
    'RIO',
    'Granta,',
    'CX-7',
    'AMG',
    'Lancer',
    'Qashqai',
    'Logan',
    'Octavia',
    'Corolla',
    'Polo',
    'NSX',
    'Model S',
  ];
  const firstNum = Math.floor(Math.random() * carCompany.length);
  const secondNum = Math.floor(Math.random() * carModel.length);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return { name: `${carCompany[firstNum]} ${carModel[secondNum]}`, color: `#${randomColor}` };
}
