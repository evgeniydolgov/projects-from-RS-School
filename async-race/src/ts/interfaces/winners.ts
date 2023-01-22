import { CreatedCarInterface } from './creat-car';

export interface Winners {
  showWinners: string;
  winList: OneWinCar[];
  allCars: CreatedCarInterface[];
}

export interface OneWinCar {
  id: string;
  color: string;
  name: string;
  wins: string;
  time: string;
}
