import newGame from "./game";
import { langBtn } from './start_page'

const totalBtn = document.querySelector('.choice__total');
const totalPage = document.querySelector('.wrapper__total');

totalBtn.addEventListener('click', () => {
    createdTotal(localStorage.getItem('lang'));
    callTotalPage();
})

langBtn.addEventListener('click', () => {
    if (document.getElementsByClassName('total-choice').length > 0) {
        createdTotal(localStorage.getItem('lang'));
    }
})
function callTotalPage() {
    totalPage.classList.add('total-choice');
}
function createdTotal(language = localStorage.getItem('lang')) {

    totalPage.innerHTML = '';
    if (!localStorage.getItem('count')) {
        localStorage.setItem('count', '0');
    }

    const messages = document.createElement('ul');
    messages.classList.add('message');
    totalPage.append(messages);

    const exitX = document.createElement('div');
    exitX.textContent = 'X'
    exitX.classList.add('message__exit-title');
    messages.append(exitX);

    exitX.addEventListener('click', () => {
        totalPage.classList.remove('total-choice');
        totalPage.innerHTML = '';
    })

    const greetTitle = document.createElement('h2');
    greetTitle.classList.add('message__title-title');
    if (language === 'en') {
        greetTitle.textContent = 'Congratulations';
    } else {
        greetTitle.textContent = 'Поздравляю';
    }
    messages.append(greetTitle);

    const greeting = document.createElement('li');
    greeting.classList.add('message__greeting-title');
    if (language === 'en') {
        greeting.textContent = `Your score is ${localStorage.getItem('count')} out of a possible 30`;
    } else {
        greeting.textContent = `Твое колличество баллов ${localStorage.getItem('count')} из возможных 30`;
    }

    messages.append(greeting);

    const rules = document.createElement('div');
    rules.classList.add('message__rules-title');
    messages.append(rules);

    if (localStorage.getItem('count') === '30') {
        const agreeButton = document.createElement('div');
        agreeButton.classList.add('message__button-win');
        if (language === 'en') {
            agreeButton.textContent = 'We have a winner!';
        } else {
            agreeButton.textContent = 'У нас есть побидитель!';
        }
        agreeButton.style.fontSize = '40px';

        messages.append(agreeButton);

        const winSong = document.createElement('audio');
        winSong.src = 'https://prodigits.co.uk/content/ringtones/tone/2020/games/preview/30065e634998093.mp3';
        winSong.autoplay = 'true';
        messages.append(winSong);
    } else {
        const agreeButton = document.createElement('div');
        agreeButton.classList.add('message__button-title');
        if (language === 'en') {
            agreeButton.textContent = "Shall we play?";
        } else {
            agreeButton.textContent = 'Сыграем?';
        }
        messages.append(agreeButton);

        agreeButton.addEventListener('click', () => {
            totalPage.classList.remove('total-choice');
            newGame();
        })
    }
}

export { createdTotal, callTotalPage };



