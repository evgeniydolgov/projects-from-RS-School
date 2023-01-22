import { RaceAdress } from '../basic-page-info';

async function engineCheck(id: string, index: number) {
  try {
    const response = await fetch(`${RaceAdress.urlPath}${RaceAdress.status}${id}${RaceAdress.drive}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const engine = await response.json();
    return engine.success;
  } catch (error) {
    RaceAdress.raceWidth[index][id] = '0';
    return 0;
  }
}

export function startAnimation(id: string, duration: number) {
  const carsSvg = document.querySelectorAll('#car-svg') as NodeListOf<HTMLElement>;
  for (let i = 0; i < carsSvg.length; i += 1) {
    const keys = Object.keys(RaceAdress.raceWidth[i]);
    if (keys[0] === id) RaceAdress.raceWidth[i][id] = `${document.documentElement.clientWidth - 180}`;

    let currentX = 0;
    const framesCount = (duration / 1000) * 60;
    const dx = (Number(RaceAdress.raceWidth[i][id]) - currentX) / framesCount;

    if (carsSvg[i].dataset.carId === id) {
      const tick = () => {
        currentX += dx;
        carsSvg[i].style.transform = `translateX(${currentX}px)`;

        if (currentX < Number(RaceAdress.raceWidth[i][id])) {
          requestAnimationFrame(tick);
        } else {
          console.log(currentX);
        }
      };
      tick();
      engineCheck(id, i);
    }
  }
}

export async function getSpeedTime(id: string) {
  const response = await fetch(`${RaceAdress.urlPath}${RaceAdress.status}${id}${RaceAdress.startMovement}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const carSpeed = await response.json();
  return Math.ceil(carSpeed.distance / carSpeed.velocity);
}

function backCarToStart(id: string, index: string) {
  setTimeout(() => {
    const carsSvg = document.querySelectorAll('#car-svg') as NodeListOf<HTMLElement>;
    carsSvg.forEach((el, i) => {
      const a = el;
      if (i === Number(index)) {
        a.style.transform = `translateX(${0}px)`;
        RaceAdress.raceWidth[Number(index)][id] = `${document.documentElement.clientWidth - 180}`;
      }
    });
  }, 1000);
}

export async function stopAnimation(id: string, index: string) {
  RaceAdress.canWin = false;
  const response = await fetch(`${RaceAdress.urlPath}${RaceAdress.status}${id}${RaceAdress.stopMovement}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const stopCar = await response.json();
  RaceAdress.raceWidth[Number(index)][id] = '0';

  backCarToStart(id, index);

  return stopCar;
}
