/*----------------------------------------------------создание-обьявление-----------------------------------------------------*/
let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.append(wrapper);

let container = document.createElement('div');
container.classList.add('container');
wrapper.append(container);

let h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = 'GEM PUZZLE'
h1.style.color = 'gold'
container.append(h1);


let downButtons = document.createElement('div');
downButtons.classList.add('downButtons');
container.append(downButtons);

//создание кнопок с переключением размера
for (let i = 0; i < 6; i++) {
    let downButton = document.createElement('button');
    downButton.classList.add(`downButtons__button${i}`);
    downButtons.append(downButton);
}

let x3 = document.querySelector('.downButtons__button0');
x3.innerText = '3x3';
let x4 = document.querySelector('.downButtons__button1');
x4.innerText = '4x4';
let x5 = document.querySelector('.downButtons__button2');
x5.innerText = '5x5';
let x6 = document.querySelector('.downButtons__button3');
x6.innerText = '6x6';
let x7 = document.querySelector('.downButtons__button4');
x7.innerText = '7x7';
let x8 = document.querySelector('.downButtons__button5');
x8.innerText = '8x8';

downButtons.addEventListener('click', function start(e){
    if (e.target === downButtons) {
        return null
    }

    if(e.target.innerText === '3x3'){
        // createdGame(9, 300, 33.3333, 3, 50);
        localStorage['gameStart'] = JSON.stringify([{countTiles : 9}, {gameSize : 300}, {sizeTiles : 33.3333}, {amount : 3}, {shaker : 50}]);
    }
    if(e.target.innerText === '4x4'){
        // createdGame(16, 400, 25, 4, 100);
        localStorage['gameStart'] = JSON.stringify([{countTiles : 16}, {gameSize : 400}, {sizeTiles : 25}, {amount : 4}, {shaker : 100}]);
    }
    if(e.target.innerText === '5x5'){
        // createdGame(25, 450, 20, 5, 100);
        localStorage['gameStart'] = JSON.stringify([{countTiles : 25}, {gameSize : 450}, {sizeTiles : 20}, {amount : 5}, {shaker : 100}]);
    }
    if(e.target.innerText === '6x6'){
        // createdGame(36, 500, 16.6666, 6, 200);
        localStorage['gameStart'] = JSON.stringify([{countTiles : 36}, {gameSize : 500}, {sizeTiles : 16.6666}, {amount : 6}, {shaker : 100}]);
    }
    if(e.target.innerText === '7x7'){
        // createdGame(49, 550, 14.2857, 7, 300);
        localStorage['gameStart'] = JSON.stringify([{countTiles : 49}, {gameSize : 550}, {sizeTiles : 14.2857}, {amount : 7}, {shaker : 100}]);
    }
    if(e.target.innerText === '8x8'){
        // createdGame(64, 600, 12.5, 8, 300);
        localStorage['gameStart'] = JSON.stringify([{countTiles : 64}, {gameSize : 600}, {sizeTiles : 12.5}, {amount : 8}, {shaker : 100}]);
    }
    window.location.reload();
})

function deleteItems() {                               //очищение элементов
        gameField.innerHTML = "";
        mov_container.innerHTML = "";
   

      
  }

let topButtons = document.createElement('div');
topButtons.classList.add('buttons');
container.append(topButtons);

//создание кнопопок с настройками
for (let i = 0; i < 4; i++) {
    let topButton = document.createElement('button');
    topButton.classList.add(`topButtons__button${i}`);
    topButtons.append(topButton);
}

const shuffle = document.querySelector('.topButtons__button0');
shuffle.innerText = 'Shuffle';
const save = document.querySelector('.topButtons__button1');
save.innerText = 'Save';
const load = document.querySelector('.topButtons__button2');
load.innerText = 'Load';
const Results = document.querySelector('.topButtons__button3');
Results.innerText = 'Results';

let counter = document.createElement('div');
counter.classList.add('counter');
container.append(counter);

let gameField = document.createElement('div');
gameField.classList.add('gameField');
container.append(gameField);

let winList = document.createElement('div');
winList.classList.add('winlist');

let winLogo = document.createElement('div');
winLogo.classList.add('winlogo');

let mov_container = document.createElement('div');
mov_container.classList.add('mov_container');
container.append(mov_container);

if (localStorage.getItem('gameStart') !== null) {
    let startArr = JSON.parse(localStorage['gameStart']);
    createdGame (startArr[0].countTiles, startArr[1].gameSize, startArr[2].sizeTiles, startArr[3].amount,startArr[4].shaker, matrix = [])
}else {
    createdGame(16, 400, 25, 4, 100)
}

function createdGame (countTiles, gameSize, sizeTiles, amount, shaker, matrix = []){     /*--------------------начало игры------------------------*/
    deleteItems();    
    let volume = true;

    let movies = document.createElement('div');
    movies.classList.add('movies');
    mov_container.append(movies);
    movies.innerText = `Steps: 0`

    let timer = document.createElement('div');
    timer.classList.add('timer');
    mov_container.append(timer);
    timer.innerText = 'Time: 00:00'

    let soundButton = document.createElement('div');
    soundButton.classList.add('sound');
    mov_container.append(soundButton);

    

//динамическое создание плиток
createdTiles (countTiles);
   function createdTiles (countTiles){
    for (let i = 0; i < countTiles; i++) {
        let tile = document.createElement('button');
        tile.classList.add(`tiles`,`tile${i+1}`);
        tile.textContent = `${i+1}`;
        tile.style.color = 'white';
        tile.draggable = 'true'
        gameField.append(tile);
    
        }
    }
        


        


    let tiles;



    function createdField(gameSize,sizeTiles){

            tiles = document.querySelectorAll('.tiles');
            gameField.style.maxWidth = gameSize +"px";
            gameField.style.height = gameSize +"px";
            
            tiles.forEach((e) => {
            e.style.width = sizeTiles + '%';
            e.style.height = sizeTiles + '%';
        })
    }

if ( matchMedia ) {
    let screen = window.matchMedia("(max-width:600px)");
    screen.addListener(changes);
    changes(screen);
}
function changes (screen) {
    if(screen.matches){
        createdField(gameSize/1.8 ,sizeTiles)
      
    }else{
        createdField(gameSize,sizeTiles)
    }
}
/*----------------------------------------------------------------расположение-------------------------------*/


let arr = [];
let num = 0;

let winArr = [] // создание выйгрышного массива
for(elem of tiles){
    winArr.push(elem)
}
createdMatrix();
function createdMatrix (){
    for (let i = 0; i < tiles.length; i++) {
    if (num < amount) {
        arr.push(tiles[i]);
    }
    if ( num === amount-1) {
        num = -1;
        matrix.push(arr);
        arr = [];
    }
    num++;
}
}


function setTilesPosition (matrix){
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            matrix[y][x].style.transform = `translate(${x * 100}%,${y * 100}% )`
        }
    }
}


let falseTiles = matrix[matrix.length-1][matrix.length-1] //исчезающая плитка
    falseTiles.style.opacity = '0';
    falseTiles.style.pointerEvents = 'none';

    let dragItem = null;
    for(elem of tiles){
        if (elem !== tiles[tiles.length-1]){
        elem.addEventListener('dragstart', (evt)=>{
            dragItem = evt.target
            console.log(dragItem);
            falseTiles.style.pointerEvents = 'auto';
        })
        elem .addEventListener(`dragend`, (evt) => {
            dragItem = null
            console.log(dragItem);
            falseTiles.style.pointerEvents = 'none';
          });

        }else{
            falseTiles .addEventListener(`dragenter`, (evt) => {
                evt.preventDefault();
                evt.target.classList.add(`drop_zone`);
            })
            falseTiles .addEventListener(`dragleave`, (evt) => {
                evt.target.classList.remove(`drop_zone`);
            })
            falseTiles .addEventListener(`dragover`, (evt) => {
                evt.preventDefault();
                evt.target.classList.remove(`drop_zone`);
            })
            falseTiles .addEventListener(`drop`, (evt) => {
                const tailLocation = findTaikLocation(dragItem, matrix);
                const falseLocation = findTaikLocation(falseTiles, matrix);
                const coordinateDifference = findCoordinateDifference (tailLocation,falseLocation);
                findCoordinateDifference(falseLocation, falseLocation)
                if (coordinateDifference) {                      //счетчик
                    steps++;
                    movies.innerText = `Steps: ${steps}`
                }
                if (coordinateDifference === true) {
                    
                    movementTile(falseLocation,tailLocation,matrix);
                    setTilesPosition (matrix);
                }
                evt.target.classList.remove(`drop_zone`);
            })
            
    }}
    
 /*------------------------------------------------------------------------перемещение-плиток------------------------------*/
let steps = 0; 
let arrOfNumber = [];
tiles.forEach(el => {
    el.addEventListener('click',letMovieFn )
})

function letMovieFn(){
    const tailLocation = findTaikLocation(this, matrix);
    const falseLocation = findTaikLocation(falseTiles, matrix);
    const coordinateDifference = findCoordinateDifference (tailLocation,falseLocation);
    
    if (coordinateDifference) {                      //счетчик
        steps++;
        movies.innerText = `Steps: ${steps}`
    }
    if (coordinateDifference === true) {
        
        movementTile(falseLocation,tailLocation,matrix);
        setTilesPosition (matrix);
    }
    arrOfNumber = matrix.map((e) => {
        return e.map((elem) => {
            return elem.innerText;
        })
    })
}

function findTaikLocation(element, matrix){ //отоброжаем координаты эдемента
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x] === element){
                return {x, y};
            }
        }
}}

function findCoordinateDifference(el1, el2){   // сравниваем элементы
      const differenceX = Math.abs(el1.x - el2.x);
      const differenceY = Math.abs(el1.y - el2.y);
      
      return (differenceX === 1 || differenceY === 1) && (el1.x === el2.x || el1.y === el2.y)
}

function  movementTile(falseLocation,tailLocation,matrix) { // смена мест плиток
    const timeTail = matrix[falseLocation.y][falseLocation.x];
    matrix[falseLocation.y][falseLocation.x] = matrix[tailLocation.y][tailLocation.x];
    matrix[tailLocation.y][tailLocation.x] = timeTail;
    showedTheWin(matrix);
    soundClick(volume);
}

/*------------------------------------------------------------проверка-на-выйгрыш------------------------------*/

function showedTheWin (matrix) {               // функция для определения победителя
    const sortArr = matrix.flat();
    for (let i = 0; i < winArr.length; i++) {
        if (sortArr [i] !== winArr[i] ) {
            return false
        }
    }
    alert(`Hooray! You solved the puzzle in ${minets.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')} and ${steps} moves!`);
    localStorage['winner'];
    setWinnerTabe()
    return true

}

/*------------------------------------------------------кнопки--------------------------------------------*/
shuffle.addEventListener('click', letShuffle)

function letShuffle (){
    volume = false;
    let i = 0; 
    while(i < shaker){
        randomShuffle(matrix);
        setTilesPosition (matrix);
        i++
    }
    steps = 0; 
    seconds = 0;
    minets = 0;
    movies.innerText = `steps: ${steps}`
    volume = true;
}
let blockedTiles = null;
function randomShuffle (matrix) {
    const falseLocation = findTaikLocation(falseTiles, matrix);
    const getCoordinats = findCoordinats(falseLocation, matrix, blockedTiles);
    const step = getCoordinats[
        Math.floor(Math.random() * getCoordinats.length)
    ];
    
    movementTile(falseLocation,step,matrix)
    blockedTiles = falseLocation;
}

function findCoordinats(falseLocation, matrix, blockedTiles){
    let nextStep = [];
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if(findCoordinateDifference ({x, y}, falseLocation)){
                if (!blockedTiles || !(blockedTiles.x === x && blockedTiles.y === y)){
                    nextStep.push({x, y})
                }
               
            }
        } 
}
    return nextStep
}

let sec = 0;
let seconds = 0
let minets = 0;
function gameTimer() {
    seconds++;
    sec = seconds
    if (seconds >= 60){
        minets = Math.floor(seconds/60);
        sec = seconds - minets * 60;
    }
    timer.innerText = `Time: ${minets.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}
// доделать сохранение массива
setInterval(() => {
    gameTimer()
    },1000)

   
    save.addEventListener('click', function () {
        localStorage.setItem('mat', JSON.stringify(arrOfNumber));
        window.localStorage['time'] = seconds;
        window.localStorage['move'] = steps;
        window.localStorage['gameSize'] = gameSize;
        window.localStorage['sizeTiles'] = sizeTiles;
        window.localStorage['countTiles'] = countTiles;        
    })

    load.addEventListener('mousedown', function () {
        localStorage['firstGame'] = true;
        if(localStorage['countTiles'] == 9){
            createdGame(9, 300, 33.3333, 3, 50);
        }
        if(localStorage['countTiles'] == 16){
            createdGame(16, 400, 25, 4, 100);
        }
        if(localStorage['countTiles'] == 25){
            createdGame(25, 450, 20, 5, 100);
        }
        if(localStorage['countTiles'] == 36){
            createdGame(36, 500, 16.6666, 6, 200);
        }
        if(localStorage['countTiles'] == 49){
            createdGame(49, 550, 14.2857, 7, 200);
        }
        if(localStorage['countTiles'] == 64){
            createdGame(64, 600, 12.5, 8, 200);
        }
    })
    load.addEventListener('mouseup', function () {
        letParseArr(JSON.parse(localStorage['mat'])); 
        steps = localStorage['move'];
        movies.innerText = `Steps: ${steps}`;
        seconds = localStorage['time'];
        
})
    gameField.append(winList);

    let text                     // создание листа лидеров
    if(!localStorage['winner']){
        text = ['Winner List'];
    }else {
        text = JSON.parse(localStorage['winner']);
    }
    localStorage['winner'] = JSON.stringify(text);
    function setWinnerTabe () {
        if(text.length <= 9){
        text.push(`<div> Win: ${steps} moves in ${minets.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}</div>`);
        }else if (text.length > 9){
            text.shift()
            text.push(`<div> Win: ${steps} moves in ${minets.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}</div>`);
        }
        localStorage['winner'] = JSON.stringify(text);
        winList.innerHTML = text.join("");     
    }

    winList.innerHTML = text.join('');  
    
    
    let testWinList = false
    Results.addEventListener('click', function(){
        if(testWinList === false){
        winList.classList.add('activ')
        testWinList = true
    }else{
        winList.classList.remove('activ')
        testWinList = false
    }


    })
   
   
  


function letParseArr (k){    // функция парсинга массива
    let answer = [];
    let array = []
    for (let y = 0; y < k.length; y++) {
        for (let x = 0; x < k.length; x++) {
            for (let a = 0; a < matrix.length; a++) {
                for (let b = 0; b < matrix.length; b++) {
                    if(matrix[a][b].innerText === k[y][x]){
                        array.push(matrix[a][b])
                        if ( array.length === k.length){
                            answer.push(array);
                            array = [];
                        }
                    }
                }}
        }}
        matrix = answer;
        console.log(matrix);
        return setTilesPosition(matrix);
    }

    function soundClick(volume){
        let audio = new Audio();
        audio.src = './schelchok.mp3';
        audio.autoplay = volume
    }

    soundButton.addEventListener('click', function() {
        if (volume) {
            volume = false;
            soundButton.style.backgroundImage = 'url(./sound_off.png)';
        }else{
            volume = true;
            soundButton.style.backgroundImage = 'url(./sound_on.png)';
        }
    })


setTilesPosition(matrix)
if (localStorage.getItem('firstGame')) {
    localStorage.removeItem('firstGame');
}else if (!localStorage.getItem('firstGame')){
    setTimeout(() => {
        letShuffle()
    }, 500);
}
}



