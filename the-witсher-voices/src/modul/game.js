import { chartersData, arrFractions } from './all_charters_link';
import CreatedAudioPlayer from './player';
import { createdTotal, callTotalPage } from './total';
import { langBtn } from './start_page'

const gamepage = document.querySelector('.wrapper__game')
const startButton = document.querySelector('.choice__text');
const fractionsList = document.querySelectorAll('.fraction__list-name');
const questionImg = document.querySelector('.question__image');
const questionAudio = document.querySelector('.questin__audio');
const answerName = document.querySelectorAll('.characters__list-name');
const nextButton = document.querySelector('.game__footer-next');
const backButton = document.querySelector('.game__footer-back')
const audioTrack = document.querySelector('.audio-treck');
const character = document.querySelector('.characters__list');
const characterInfo = document.querySelector('.characters__info');
const count = document.querySelector('.game__counter');
const secretName = document.querySelector('.question__name');

let cycle = 0;
let gameCount;
let allGameCount = 0;
let idArr = [];
let sound = true;



langBtn.addEventListener('click', () => {
    if (document.getElementsByClassName('start-right').length > 0) {
        gamepage.classList.remove('start-right');
        newGame()
    }
})


function createdFractions(cycle, lang = localStorage.getItem('lang')) {
    fractionsList.forEach((element, index) => {
        if (lang === 'en') {
            element.textContent = `${arrFractions[index]}`;
            backButton.textContent = 'BACK';
            nextButton.textContent = 'NEXT'
        } else {
            element.textContent = `${arrFractions[index + 6]}`;
            backButton.textContent = 'НАЗАД';
            nextButton.textContent = 'ВПЕРЕД'
        }

        fractionsList[index].classList.remove('select__fraction');
        fractionsList[cycle].classList.add('select__fraction');
    })
}

function characterShuffle(id) {
    let x;
    chartersData.forEach((element) => {
        element.forEach((el) => {
            if (el.id === +id) {
                x = el;
            }
        })
    })
    return x;
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function createdRamdomImage(cycle, number) {
    questionImg.innerHTML = '';

    const questionPersona = document.createElement('video');
    questionPersona.classList.add('persona-img');
    questionPersona.autoplay = 'true';
    questionPersona.loop = 'true';
    questionPersona.poster = `${chartersData[cycle][number].image}`;
    questionPersona.src = `${chartersData[cycle][number].video}`;
    questionPersona.id = `${chartersData[cycle][number].id}`
    questionImg.append(questionPersona);

    const goldShirt = document.createElement('img')
    goldShirt.src = 'https://gwent.one/image/card/low/assets/border-gold.png';
    goldShirt.classList.add('gold-shirt');
    questionImg.append(goldShirt);

    const questionShirt = document.createElement('div');
    questionShirt.classList.add('shirt');
    questionImg.append(questionShirt);

    CreatedAudioPlayer(questionAudio, chartersData[cycle][number].audio, localStorage.getItem('lang'))
}

function createdAnswerName(cycle, lang = localStorage.getItem('lang')) {
    let randomArr = shuffle(chartersData[cycle])
    for (let i = 0; i < answerName.length; i++) {
        for (let j = 0; j < randomArr.length; j++) {
            if (lang === 'en') {
                answerName[i].textContent = `${randomArr[i].nameen}`;
            } else {
                answerName[i].textContent = `${randomArr[i].nameru}`;
            }

            answerName[i].id = `${randomArr[i].id}`;
        }
    }
}

function nextCycle(lang = localStorage.getItem('lang')) {
    secretName.textContent = '******';
    secretName.style.fontFamily = 'Trebuchet MS'
    characterInfo.innerHTML = '';
    if (lang === 'en') {
        characterInfo.textContent = 'identify the character by the phrase';
    } else {
        characterInfo.textContent = 'определи персонажа по фразе';
    }

    questionAudio.innerHTML = '';
    nextButton.classList.remove('onwork');
    returnStyleName()
    cycle++;
    gameCount = 5;
    sound = true;
    createdRandomCharter(cycle);
    questionImg.lastChild.classList.add('shirt-black');
    nextButton.removeEventListener('click', nextCycle);
}

function errorSound() {
    if (sound === true) {
        audioTrack.innerHTML = '';
        const audio = document.createElement('audio');
        audio.setAttribute("autoplay", "true");
        audio.src = "https://gwent.one/audio/card/hc/pl/SAY.Battlecries.797.mp3";
        audioTrack.append(audio);
    }
}

function winSound() {
    if (sound === true) {
        audioTrack.innerHTML = '';
        const audio = document.createElement('audio');
        audio.setAttribute("autoplay", "true");
        audio.src = "https://prodigits.co.uk/content/ringtones/tone/2020/games/preview/bc9f920c5250740.mp3";
        audioTrack.append(audio);
        sound = false;
        allGameCount += gameCount;
        count.textContent = `\`${allGameCount}`;
        localStorage.setItem('count', allGameCount);
        nextButton.classList.add('onwork');
        questionImg.lastChild.classList.remove('shirt-black');
    }

}

function stopVoice() {
    questionAudio.firstChild.firstChild.pause();
    questionAudio.firstChild.childNodes[1].style.display = 'block';
    questionAudio.firstChild.childNodes[2].style.display = 'none';
}
function createdInfoCharacter(image, name, audio, description) {
    characterInfo.innerHTML = '';

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info__container')
    characterInfo.append(infoContainer);

    const characterBlockImg = document.createElement('div');
    characterBlockImg.classList.add('info__block-up');
    infoContainer.append(characterBlockImg);

    const characterImage = document.createElement('img');
    characterImage.classList.add('info__image');
    characterImage.src = `${image}`;
    characterBlockImg.append(characterImage);

    const characterBlockInfo = document.createElement('div');
    characterBlockInfo.classList.add('info__block-down')
    infoContainer.append(characterBlockInfo);

    const characterName = document.createElement('div');
    characterName.classList.add('info__name');
    characterName.textContent = `${name}`;
    characterBlockInfo.append(characterName);

    CreatedAudioPlayer(characterBlockInfo, audio, localStorage.getItem('lang'));

    const characterDescription = document.createElement('p');
    characterDescription.classList.add('info__description');
    characterDescription.textContent = `${description}`;
    characterInfo.append(characterDescription);
}

function picterBeforeName(str, x, y) {
    if (sound === true && x === y) {
        str.classList.remove('standart');
        str.classList.add('right');
    } else if (sound === true && x !== y) {
        str.classList.remove('standart');
        str.classList.add('error');
    }
}

function returnStyleName() {
    answerName.forEach((el) => {
        el.classList.remove('error');
        el.classList.remove('right');
        el.classList.add('standart');
    })

}

function createdRandomCharter(cycle) {
    createdFractions(cycle);
    questionImg.innerHTML = '';
    let randomNumber = getRandomInt(0, 6);
    createdRamdomImage(cycle, randomNumber);
    createdAnswerName(cycle)
}
createdRandomCharter(cycle);

character.addEventListener('mousedown', function go(el, lang = localStorage.getItem('lang')) {
    if (el.target.id) {
        const selectId = el.target.id;
        const randomId = questionImg.firstChild.id;
        let person = characterShuffle(selectId);

        picterBeforeName(el.target, selectId, randomId, lang = localStorage.getItem('lang'))
        if (lang === 'en') {
            createdInfoCharacter(person.image, person.nameen, person.audio, person.descriptionen);
        } else {
            createdInfoCharacter(person.image, person.nameru, person.audio, person.descriptionru);
        }
        if (randomId === selectId) {
            if (lang === 'en') {
                secretName.textContent = `${person.nameen}`;
            } else {
                secretName.textContent = `${person.nameru}`;
            }

            secretName.style.fontFamily = 'Masonchronicles'
            winSound();
            stopVoice()
            if (cycle < 5) {
                nextButton.addEventListener('click', nextCycle);
            } else if (cycle === 5) {
                nextButton.addEventListener('click', endGame)
            }

        } else {
            if (gameCount !== 0 && !idArr.includes(selectId)) {
                gameCount = gameCount - 1
                idArr.push(selectId);
            }
            errorSound();
        }
    }
})

function endGame() {
    createdTotal();
    callTotalPage();
    gamepage.classList.remove('start-right');
    nextButton.removeEventListener('click', nextCycle);
    nextButton.classList.remove('onwork');
}

function hideCard(sound) {
    if (sound === true) {
        questionImg.lastChild.classList.add('shirt-black');
    } else {
        questionImg.lastChild.classList.remove('shirt-black');
    }
}
hideCard(sound)

function newGame(lang = localStorage.getItem('lang')) {
    gamepage.classList.add('start-right');
    gameCount = 5;
    idArr = [];
    cycle = 0;
    allGameCount = 0;
    count.textContent = `\`${allGameCount}`;
    createdRandomCharter(cycle);
    secretName.textContent = '******';
    secretName.style.fontFamily = 'Trebuchet MS'
    characterInfo.innerHTML = '';
    if (lang === 'en') {
        characterInfo.textContent = 'identify the character by the phrase';
    } else {
        characterInfo.textContent = 'определи персонажа по фразе';
    }

    questionAudio.innerHTML = '';
    nextButton.classList.remove('onwork');
    returnStyleName()
    sound = true;
    createdRandomCharter(cycle);
    questionImg.lastChild.classList.add('shirt-black');
    nextButton.removeEventListener('click', endGame)
}

startButton.addEventListener('click', () => {
    newGame()
})

backButton.addEventListener('click', () => {
    gamepage.classList.remove('start-right');
})


export default newGame

