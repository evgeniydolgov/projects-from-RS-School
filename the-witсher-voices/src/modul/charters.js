import { chartersData, arrFractions } from './all_charters_link';
import CreatedAudioPlayer from './player';
import { langBtn } from './start_page'

const page = document.querySelector('.wrapper');
const chartersLink = document.querySelector('.choice__charters');
const popUp = document.querySelector('.wrapper__pop-up');

const videoBlock = document.querySelector('.image-video');
const aboutPerson = document.querySelector('.about-person');


chartersLink.addEventListener('click', () => {
    chartersPage.classList.toggle('about-top');
})
langBtn.addEventListener('click', () => {
    blackBackground.innerHTML = '';
    createdGallery(localStorage.getItem('lang'));
    popUp.classList.remove('click-on-pickter');
    videoBlock.innerHTML = '';
    aboutPerson.innerHTML = '';
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

function createdGallery(lang) {
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
    if (lang === 'en') {
        chartersTitle.textContent = 'Charters';
    } else {
        chartersTitle.textContent = 'Персонажи';
    }
    blackBackground.append(chartersTitle);

    function cardMix(params, language) {
        params.forEach((element, index) => {

            const blockImg = document.createElement('div');
            blockImg.classList.add('charters__block');
            blackBackground.append(blockImg);

            const miniTitle = document.createElement('h3');
            miniTitle.classList.add('charters__tittle');
            if (lang === 'en') {
                miniTitle.textContent = arrFractions[index];
            } else {
                miniTitle.textContent = arrFractions[index + 6];
            }

            blockImg.append(miniTitle);

            element.forEach(persona => {
                if (language === 'en') {
                    creatingShirt(blockImg, persona.image, persona.nameen, persona.id, persona.video)
                } else {
                    creatingShirt(blockImg, persona.image, persona.nameru, persona.id, persona.video)
                }

            })
        });
    }

    cardMix(chartersData, localStorage.getItem('lang'))


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
        return cardText
    }
}

popUp.addEventListener('click', (el) => {
    if (el.target.className === 'wrapper__pop-up pop-up click-on-pickter') {
        popUp.classList.remove('click-on-pickter');
        videoBlock.innerHTML = '';
        aboutPerson.innerHTML = '';
    }
})

blackBackground.addEventListener('click', createdPopUpOnLang)

function createdPopUpOnLang(el) {
    if (new Date().getTime() - this.lastClick < 1000)
        return;
    this.lastClick = new Date().getTime();
    const foundId = el.target.id;
    if (el.target.className === 'all-cards-image') {
        popUp.classList.add('click-on-pickter');
        chartersData.forEach(element => {
            element.forEach(person => {
                if (person.id === Number(foundId)) {
                    bigVideoPlay(person.video, person.image);
                    if (localStorage.getItem('lang') === 'en') {
                        bigName(person.nameen);
                        CreatedAudioPlayer(aboutPerson, person.audio, localStorage.getItem('lang'))
                        bigDescriptionPerson(person.descriptionen);
                    } else {
                        bigName(person.nameru);
                        CreatedAudioPlayer(aboutPerson, person.audio, localStorage.getItem('lang'))
                        bigDescriptionPerson(person.descriptionru);
                    }

                    exitPopUp();
                }
            })
        });
    };
}

function bigVideoPlay(video, image) {
    const bigVideo = document.createElement('video');
    bigVideo.src = `${video}`;
    bigVideo.autoplay = 'true';
    bigVideo.loop = 'true';
    bigVideo.poster = `${image}`;
    bigVideo.classList.add('big-video');
    videoBlock.append(bigVideo);
}

function bigName(name, id) {
    const bigNames = document.createElement('h3');
    bigNames.classList.add('big-name');
    bigNames.textContent = `${name}`;
    aboutPerson.append(bigNames);
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

createdGallery(localStorage.getItem('lang'));
