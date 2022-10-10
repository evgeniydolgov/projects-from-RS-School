/*-------------------------------------------------------------------------burger-menu----------------------------------------*/
let header_burger = document.querySelector('.hamburger_menu');
let body = document.querySelector('.back');
let menuSub = document.querySelector('.menu__sub-list');

function burgerClick () {
    header_burger.classList.toggle('hamburger_menu_active');
    body.classList.toggle('dark');
    menuSub.classList.toggle('active');
}

    header_burger.addEventListener('click', burgerClick);



/*------------------------------------------------------------------------caroseul---------------------------------------------*/

const buttonLeft = document.querySelector(".arrow_left");
const buttonRight = document.querySelector(".arrow_right");
const littleButtonRight = document.querySelector(".arrow_rigth_little");
const littleButtonLeft = document.querySelector(".arrow_left_little")
const slider = document.querySelector(".slider");
const sliderDown = document.querySelector(".slider-down");

const leftSlideTop = document.querySelector(".prev-top");
const centerSlideTop = document.querySelector(".center-top");
const rightSlideTop = document.querySelector(".last-top");
const leftSlideDown = document.querySelector(".prev-down");
const centerSlideDown = document.querySelector(".center-down");
const rightSlideDown = document.querySelector(".last-down");

const moveLeft = () => {
  slider.classList.add("transition-left");
  sliderDown.classList.add("transition-left");
  leftSlideTop.childNodes[3].style.order = Math.floor(Math.random() * 2 - 1);
  leftSlideTop.childNodes[5].style.order = Math.floor(Math.random() * 2 - 1);
  leftSlideDown.childNodes[3].style.order = Math.floor(Math.random() * 5 - 1);
  leftSlideDown.childNodes[5].style.order = Math.floor(Math.random() * 5 - 1);
  buttonLeft.removeEventListener('click',moveLeft)
};

const moveRight = () => {
  slider.classList.add("transition-right");
  sliderDown.classList.add("transition-right");
  rightSlideTop.childNodes[3].style.order = Math.floor(Math.random() * 5 - 1);
  rightSlideTop.childNodes[5].style.order = Math.floor(Math.random() * 2 - 1);
  rightSlideDown.childNodes[3].style.order = Math.floor(Math.random() * 5 - 1);
  rightSlideDown.childNodes[5].style.order = Math.floor(Math.random() * 5 - 1);
  buttonRight.removeEventListener('click',moveRight)
};

buttonLeft.addEventListener("click", moveLeft);
buttonRight.addEventListener("click", moveRight);
littleButtonRight.addEventListener("click", moveRight);
littleButtonLeft.addEventListener("click", moveLeft);



slider.addEventListener("animationend", function(animationEvent) {
    buttonLeft.addEventListener("click", moveLeft);
    buttonRight.addEventListener("click", moveRight);
    const leftContent = document.querySelector(".prev-top").innerHTML;
    const centerContent = document.querySelector(".center-top").innerHTML;
    const rightContent = document.querySelector(".last-top").innerHTML;

    if (animationEvent.animationName === "move-left") {
      slider.classList.remove("transition-left");
      leftSlideTop.innerHTML = rightContent;
      centerSlideTop.innerHTML = leftContent;
      rightSlideTop.innerHTML = centerContent;
    } else {
      slider.classList.remove("transition-right");
      leftSlideTop.innerHTML = centerContent;
      centerSlideTop.innerHTML = rightContent;
      rightSlideTop.innerHTML = leftContent;
    }
  })

  sliderDown.addEventListener("animationend", function(animationEvent) {

    const leftContentDown = document.querySelector(".prev-down").innerHTML;
    const centerContentDown = document.querySelector(".center-down").innerHTML;
    const rightContentDown = document.querySelector(".last-down").innerHTML;

    if (animationEvent.animationName === "move-left") {
      sliderDown.classList.remove("transition-left");
      leftSlideDown.innerHTML = rightContentDown;
      centerSlideDown.innerHTML = leftContentDown;
      rightSlideDown.innerHTML = centerContentDown;
    } else {
      sliderDown.classList.remove("transition-right");
      leftSlideDown.innerHTML = centerContentDown;
      centerSlideDown.innerHTML = rightContentDown;
      rightSlideDown.innerHTML = leftContentDown;
    }
  })

/*-------------------------------------------------------------------------------------slaider---------------------------*/
let p = document.querySelector('.ppp');
let sliderBar = document.querySelector(".range");
let reviews = document.querySelector('.reviews')

let rangeValue = function(){
    reviews.style.left = - sliderBar.value * 301 + "px";
  }

 sliderBar.addEventListener("input", rangeValue);
/*------------------------------------------------------------------------------pop up---------------------------------------*/
let popUpHide = document.querySelector('.popup');
let reviewsTable = document.querySelectorAll('.all_block_little');
let newPopUp = document.querySelector('.popup_reviews');
let head = document.querySelector('.header__container');
let cross = document.querySelector('.x_popup');

reviewsTable.forEach(function(elem){
    elem.addEventListener('click', function(){
      popUpHide.classList.remove('off');
      body.classList.toggle('dark');
      head.style.display = 'none';
      header_burger.style.opacity = 0;
      let pop_content = elem.cloneNode(true);
      pop_content.classList.add('new');
      newPopUp.innerHTML = pop_content.outerHTML;
    })
});

body.addEventListener('click',function(){
  header_burger.style.opacity = 1;
  head.style.display = 'flex';
  body.classList.remove('dark');
  menuSub.classList.remove('active');
  header_burger.classList.remove('hamburger_menu_active');
  popUpHide.classList.add('off');
  reviewsTable.forEach(function(elem){
    elem.classList.remove('new');
  });
});

cross.addEventListener('click',function(){
  header_burger.style.opacity = 1;
  head.style.display = 'flex';
  body.classList.remove('dark');
  menuSub.classList.remove('active');
  header_burger.classList.remove('hamburger_menu_active');
  popUpHide.classList.add('off');
  reviewsTable.forEach(function(elem){
    elem.classList.remove('new');
  });
})
