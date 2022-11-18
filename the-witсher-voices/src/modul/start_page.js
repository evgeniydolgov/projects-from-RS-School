const start = document.querySelector('.start-text');
const charters = document.querySelector('.character-text');
const total = document.querySelector('.total-text');
const about = document.querySelector('.about-text');
const langBtn = document.querySelector('.footer-list__lang');

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'en')
}

startLanguageText()

langBtn.addEventListener('click', () => {
    selectLang(localStorage.getItem('lang'))
    startLanguageText()
});

function selectLang(x) {
    if (x === 'en') {
        langBtn.textContent = 'RU';
        localStorage.setItem('lang', 'ru');
    } else {
        langBtn.textContent = 'EN';
        localStorage.setItem('lang', 'en');
    }
}
function startLanguageText() {
    if (localStorage.getItem('lang') === 'en') {
        start.textContent = 'start';
        charters.textContent = 'charters';
        total.textContent = 'total';
        about.textContent = 'about';
        langBtn.textContent = 'EN';
    } else {
        start.textContent = 'старт';
        charters.textContent = 'персонажи';
        total.textContent = 'итого';
        about.textContent = 'об игре';
        langBtn.textContent = 'RU';
    }
}

export { langBtn };