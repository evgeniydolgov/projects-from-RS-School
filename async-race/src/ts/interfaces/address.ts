import { RoadLength } from './road-length';

export interface RaceAdressInterface {
  urlPath: string;
  allCarGarage: string;
  limitCar: string;
  status: string;
  startMovement: string;
  stopMovement: string;
  drive: string;
  canWin:boolean;
  raceWidth: RoadLength[];
  pageNumber: number;
  carInGarage: number;
}
