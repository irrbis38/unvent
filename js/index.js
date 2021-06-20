// map

let mapOpener = document.querySelector('.header__location');
let map = document.querySelector('.map');
let body = document.querySelector('body');

mapOpener.addEventListener('click', () => {
  map.classList.add("active");
  body.classList.add('lock');
});

let mapCloseByBG = document.querySelector('.map__bg');

let mapCloseByCross = document.querySelector('.map__close');

let closeMap = () => {
  map.classList.remove("active");
  body.classList.remove('lock');
};

mapCloseByBG.addEventListener('click', closeMap);
mapCloseByCross.addEventListener('click', closeMap);


// sertificates

let firstSertificateOpener = document.querySelector('.first__prev');
let firstSertificate = document.querySelector('.first__sert');
let secondSertificateOpener = document.querySelector('.second__prev');
let secondSertificate = document.querySelector('.second__sert');
let thirdSertificateOpener = document.querySelector('.third__prev');
let thirdSertificate = document.querySelector('.third__sert');
let sertificate = document.querySelector('.certificates');
let allSert = document.querySelectorAll('.certificates__item');
let sertCloser = document.querySelector('.certificates__close');
let sertBG = document.querySelector('.certificates__bg');

let openFirst = () => {
  sertificate.classList.add('active');
  firstSertificate.classList.add('active');
  // body.classList.add('lock');
};

let openSecond = () => {
  sertificate.classList.add('active');
  secondSertificate.classList.add('active');
  // body.classList.add('lock');
};

let openThird = () => {
  sertificate.classList.add('active');
  thirdSertificate.classList.add('active');
  // body.classList.add('lock');
};

let closeAll = () => {
  sertificate.classList.remove('active');
  allSert.forEach(element => {
    element.classList.remove('active');
  });
  body.classList.remove('lock');
}

firstSertificateOpener.addEventListener('click', openFirst);
secondSertificateOpener.addEventListener('click', openSecond);
thirdSertificateOpener.addEventListener('click', openThird);
sertCloser.addEventListener('click', closeAll);
sertBG.addEventListener('click', closeAll);


// slider

let slider = new Swiper('.slider__container', {

	loop: true,
	slidesPerView: 2.5,
	spaceBetween: 15,
	grabCursor: true,

	// Navigation arrows
	navigation: {
		nextEl: '.intro__next',
		prevEl: '.intro__prev',
	},
	breakpoints: {
		768: {
		slidesPerView: 3,
		spaceBetween: 15
		}
	}
});


// burger menu

let burger = document.querySelector('.header__burger');
let burgerNav = document.querySelector('.burger__nav');
let burgerBG = document.querySelector('.burger__bg');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  burgerNav.classList.toggle('active');
  burgerBG.classList.toggle('active');
  body.classList.toggle('lock');
});

burgerBG.addEventListener('click', () => {
  burger.classList.remove('active');
  burgerNav.classList.remove('active');
  burgerBG.classList.remove('active');
  body.classList.remove('lock');
});


