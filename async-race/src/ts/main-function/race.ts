import { RaceAdress } from '../basic-page-info';
import { getSpeedTime, startAnimation, stopAnimation } from './car-animation';

export function startRaceFunc() {
  RaceAdress.canWin = true;
  const race = RaceAdress.raceWidth.map(async (el, i) => {
    const keys = Object.keys(RaceAdress.raceWidth[i]);
    const time = await getSpeedTime(keys[0]);
    startAnimation(keys[0], time);
    return el;
  });
  Promise.allSettled(race).then(() => {
    const startRace = document.querySelector('#race-start') as HTMLButtonElement;
    const stopRace = document.querySelector('#race-stop') as HTMLButtonElement;
    startRace.classList.toggle('disable-change');
    stopRace.classList.toggle('disable-change');
  });
}

export async function stopRaceFunc() {
  RaceAdress.raceWidth.forEach((el, i) => {
    const keys = Object.keys(RaceAdress.raceWidth[i]);
    stopAnimation(keys[0], i.toString());
  });
}

export function showTheWinner() {
  if (RaceAdress.canWin) {
    // eslint-disable-next-line spaced-comment
    //доделать победителя, м.б. создать еще обьект содержищий победоносную инфу
  }
}
