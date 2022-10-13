let header_burger = document.querySelector('.hamburger_menu');
let body = document.querySelector('.back');
let menuSub = document.querySelector('.menu__sub-list');
let form = document.querySelector('.form__number')

function burgerClick () {
    header_burger.classList.toggle('hamburger_menu_active');
    body.classList.toggle('dark');
    menuSub.classList.toggle('active');
}
    header_burger.addEventListener('click', burgerClick);

    body.addEventListener('click',function(){
        body.classList.remove('dark');
        menuSub.classList.remove('active');
        header_burger.classList.remove('hamburger_menu_active');
      });
/*----------------------------------------------------------------input-------------------------------------------*/

let sumOfDollars = document.querySelectorAll('.form__range');
let amount = document.querySelector('.form__number');
let moneyArr = [5000,2000,1000,500,250,100,50,25];
let priceColor = document.querySelectorAll('.form-price');
let ticks = document.querySelectorAll('.ticks');
amount.value = 100;

let ValuDollars = function(){
    let x = moneyArr.length - this.max;
    amount.value = moneyArr[this.value - 1 + x];
    priceColor.forEach((el) => {
        el.classList.remove('item_active');
        if (moneyArr[this.value - 1 + x] === parseFloat(el.innerHTML.substring(1))){
            el.classList.add('item_active')
        }
    })
  }

  sumOfDollars.forEach(function(elem){
    elem.addEventListener("input", ValuDollars);
    elem.addEventListener('input', function () {
        document.querySelectorAll('.ticks .tick_active').forEach(n => n.classList.remove('tick_active'));
        ticks.forEach((el) => {
            el.children[elem.value-1].classList.add('tick_active');
        })
    })
  })

  window.addEventListener('resize', () => {
    if (+window.innerWidth < 1600) {
        priceColor.forEach((el) => {
            el.classList.remove('item_active');
            if ( 100 === parseFloat(el.innerHTML.substring(1))){
                el.classList.add('item_active')
            }
        })
        amount.value = 100;
        sumOfDollars.forEach(function(elem){
            elem.value = elem.max - 2;
          })
        document.querySelectorAll('.ticks .tick_active').forEach(n => n.classList.remove('tick_active'));
        ticks.forEach((el) => {
        if (+window.innerWidth > 1000) {
            el.children[5].classList.add('tick_active');
        }else if (+window.innerWidth < 1000 && +window.innerWidth > 640) {
            el.children[4].classList.add('tick_active');
        }if (+window.innerWidth < 640) {
            el.children[2].classList.add('tick_active');
        }
        })
    }
  })

  amount.addEventListener('input', function (){
    console.log(amount.value);
    for(let i = 0; i<moneyArr.length; i++){

        if (+window.innerWidth > 1000) {
            if (!moneyArr.includes(Number(amount.value))){
                console.log('!!!!');
            priceColor.forEach((el) => {
                el.classList.remove('item_active');
                document.querySelectorAll('.ticks .tick_active').forEach(n => n.classList.remove('tick_active'));
            })
        }
    }if (+window.innerWidth <= 1000 && +window.innerWidth > 640) {
        if (amount.value == 5000 || !moneyArr.includes(Number(amount.value))) {
            priceColor.forEach(n => n.classList.remove('item_active'));
            document.querySelectorAll('.ticks .tick_active').forEach(n => n.classList.remove('tick_active'));
        }
    }if (+window.innerWidth <= 640) {
        if (amount.value == 5000 || amount.value == 2000 || !moneyArr.includes(Number(amount.value))) {
            priceColor.forEach(n => n.classList.remove('item_active'));
            document.querySelectorAll('.ticks .tick_active').forEach(n => n.classList.remove('tick_active'));
        }
    }

        if(moneyArr[i] == amount.value){
            sumOfDollars.forEach(function(elem){
                if (+window.innerWidth > 1000) {
                    elem.value = i+1; 
                    document.querySelectorAll('.ticks .tick_active').forEach(n => n.classList.remove('tick_active'));
                    document.querySelector(`.tick_${moneyArr[i]}`).classList.add('tick_active');
                    priceColor.forEach((el) => {
                        el.classList.remove('item_active');
                        if ( moneyArr[i] === parseFloat(el.innerHTML.substring(1))){
                            el.classList.add('item_active')
                        }
                    })
                }if (+window.innerWidth <= 1000 && +window.innerWidth > 640 && amount.value != 5000) {
                    console.log('123123');
                    elem.value = i;
                    document.querySelectorAll('.ticks .tick_active').forEach(n => n.classList.remove('tick_active'));
                    document.querySelector(`.tick_${moneyArr[i]}t`).classList.add('tick_active');
                    priceColor.forEach((el) => {
                        el.classList.remove('item_active');
                        if ( moneyArr[i] === parseFloat(el.innerHTML.substring(1))){
                            el.classList.add('item_active')
                        }
                    })
                }if (+window.innerWidth <= 640) {
                    elem.value = i-2;
                    document.querySelectorAll('.ticks .tick_active').forEach(n => n.classList.remove('tick_active'));
                    document.querySelector(`.tick_${moneyArr[i]}s`).classList.add('tick_active');
                    priceColor.forEach((el) => {
                        el.classList.remove('item_active');
                        if ( moneyArr[i] === parseFloat(el.innerHTML.substring(1))){
                            el.classList.add('item_active')
                        }
                    })
                }
            })
        }

    }

  })

  function limit()
{
    let max_chars = 4;

    if(this.value.length > max_chars) {
        this.value = this.value.substr(0, max_chars);
    }
};

form.addEventListener('input', limit);