import chartersData from './all_charters_link';
import CreatedAudioPlayer from './player';

const page = document.querySelector('.wrapper');
const chartersLink = document.querySelector('.choice__charters');
const popUp = document.querySelector('.wrapper__pop-up');

const videoBlock = document.querySelector('.image-video');
const aboutPerson = document.querySelector('.about-person');


chartersLink.addEventListener('click', () => {
    chartersPage.classList.toggle('about-top');
})

const chartersPage = document.createElement('section');
chartersPage.classList.add('wrapper__charters');
chartersPage.classList.add('charters');
page.append(chartersPage);

const blackBackground = document.createElement('div');
blackBackground.classList.add('charters__wrapper');
chartersPage.append(blackBackground);

const blackBackgroundFooter = document.createElement('div');
blackBackgroundFooter.classList.add('charters__wrapper-fot');
chartersPage.append(blackBackgroundFooter);

chartersPage.addEventListener('click', (el) => {
    const missClick = el.composedPath().includes(blackBackground);
    if (!missClick) {
        chartersPage.classList.toggle('about-top');
    }
})

const exitPage = document.createElement('div');
exitPage.classList.add('exit');
exitPage.textContent = 'X';
blackBackground.append(exitPage);


exitPage.addEventListener('click', () => {
    chartersPage.classList.toggle('about-top');
})

const chartersTitle = document.createElement('h2');
chartersTitle.classList.add('game-logo__text');
chartersTitle.textContent = 'Charters'
blackBackground.append(chartersTitle);

// const neutral = document.createElement('h3');
// neutral.classList.add('charters__neutral-tittle');
// neutral.textContent = 'neutral';
// blackBackground.append(neutral);

// const geraltCard = document.createElement("img");
// geraltCard.classList.add('geralt-card')
// geraltCard.src = "https://gwent.one/image/card/low/assets/border-gold.png";
// blackBackground.append(geraltCard);

const arrFractions = ['neutral', 'northerners', 'scoiatael', 'skellige', 'nilfgaard', 'monster']

function cardMix(params) {
    params.forEach((element, index) => {

        const blockImg = document.createElement('div');
        blockImg.classList.add('charters__block');
        blackBackground.append(blockImg);

        const miniTitle = document.createElement('h3');
        miniTitle.classList.add('charters__tittle');
        miniTitle.textContent = arrFractions[index];
        blockImg.append(miniTitle);

        element.forEach(persona => {
            creatingShirt(blockImg, persona.image, persona.nameen, persona.id, persona.video)
        })
    });
}

cardMix(chartersData)
function creatingShirt(params, imgCharter, nameCharter, id, video) {
    const card = document.createElement("div");
    card.classList.add('block-for-cards');
    params.append(card);

    const cardText = document.createElement("div");
    cardText.classList.add('cards-text');
    cardText.textContent = nameCharter;
    card.append(cardText);

    const shirtCard = document.createElement("img");
    shirtCard.classList.add('all-cards-image');
    shirtCard.src = "https://gwent.one/image/card/low/assets/border-gold.png";
    shirtCard.style.backgroundImage = `url(${imgCharter})`;
    shirtCard.setAttribute('id', `${id}`)
    card.append(shirtCard);

    const videoCard = document.createElement("video");
    videoCard.classList.add('video-image');
    videoCard.src = `${video}`;
    videoCard.pause();
    card.append(videoCard);

    shirtCard.onmouseover = function () {
        videoCard.style.opacity = '1';
        shirtCard.style.backgroundImage = '';
        videoCard.play();
    }
    shirtCard.onmouseout = function () {
        videoCard.style.opacity = '0';
        shirtCard.style.backgroundImage = `url(${imgCharter})`;
        videoCard.pause();
    }
}

popUp.addEventListener('click', (el) => {
    if (el.target.className === 'wrapper__pop-up pop-up click-on-pickter') {
        popUp.classList.remove('click-on-pickter');
        videoBlock.innerHTML = '';
        aboutPerson.innerHTML = '';
    }
})

let audio = document.querySelector('#audio-player');
let progress = document.querySelector('progress')
let out = document.querySelector('#out');

blackBackground.addEventListener('click', (el) => {
    const foundId = el.target.id;
    if (el.target.className === 'all-cards-image') {
        popUp.classList.add('click-on-pickter');
        chartersData.forEach(element => {
            element.forEach(person => {
                if (person.id === Number(foundId)) {
                    bigVideoPlay(person.video, person.image);
                    bigName(person.nameen);
                    CreatedAudioPlayer(aboutPerson, person.audio)
                    bigDescriptionPerson(person.descriptionen);
                    exitPopUp();

                }
            })
        });
    };
})


function bigVideoPlay(video, image) {
    const bigVideo = document.createElement('video');
    bigVideo.src = `${video}`;
    bigVideo.autoplay = 'true';
    bigVideo.loop = 'true';
    bigVideo.poster = `${image}`;
    bigVideo.classList.add('big-video');
    videoBlock.append(bigVideo);
}

function bigName(name) {
    const bigName = document.createElement('h3');
    bigName.classList.add('big-name');
    bigName.textContent = `${name}`;
    aboutPerson.append(bigName);
}

function bigVoicePlayer(audio) {
    const bigVoice = document.createElement('audio');
    bigVoice.classList.add('big-voice');
    bigVoice.src = `${audio}`;
    bigVoice.controls = 'true'
    aboutPerson.append(bigVoice);
}

function bigDescriptionPerson(descrip) {
    const bigDescription = document.createElement('p');
    bigDescription.classList.add('big-discription');
    bigDescription.textContent = `${descrip}`;
    aboutPerson.append(bigDescription);
}

function exitPopUp() {
    const exitPagePopUp = document.createElement('div');
    exitPagePopUp.classList.add('exitTwo');
    exitPagePopUp.textContent = 'X';
    aboutPerson.append(exitPagePopUp);
    exitPagePopUp.addEventListener('click', () => {
        popUp.classList.remove('click-on-pickter');
        videoBlock.innerHTML = '';
        aboutPerson.innerHTML = '';
    })
}






