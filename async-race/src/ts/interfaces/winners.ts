import { CreatedCarInterface } from './creat-car';

export interface Winners {
  showWinners: string;
  changeFilter: string;
  winPageNumber: number;
  maxWinPage: number;
  winner: string;
  arrow: string;
  winListMemory: OneWinCar[];
  allCars: CreatedCarInterface[];
}

export interface WinCar {
  id: string;
  time: number;
}

export interface OneWinCar {
  id: string;
  color: string;
  name: string;
  wins: string;
  time: string;
}
