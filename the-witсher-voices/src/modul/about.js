const textAbout = document.querySelector('.choice__about');
const aboutPage = document.querySelector('.wrapper__page-about');

textAbout.addEventListener('click', () => {
    aboutPage.classList.toggle('about-left');
})

const messages = document.createElement('ul');
messages.classList.add('message');
aboutPage.append(messages);

const greetTitle = document.createElement('h2');
greetTitle.classList.add('message__title');
greetTitle.textContent = 'About Game';
messages.append(greetTitle);

const greeting = document.createElement('li');
greeting.classList.add('message__greeting');
greeting.textContent = 'Нello my friend, today we will find out how well you know the witcher universe.';
messages.append(greeting);

const rules = document.createElement('li');
rules.classList.add('message__rules');
rules.textContent = 'This game features six characters from six playable factions. Your task is to guess the character by his phrase. Note that the phrases differ from the selected language.';
messages.append(rules);

const agreeButton = document.createElement('button');
agreeButton.classList.add('message__button');
agreeButton.textContent = 'OK';
messages.append(agreeButton);

agreeButton.addEventListener('click', () => {
    aboutPage.classList.toggle('about-left');
})


