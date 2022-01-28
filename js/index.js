// map

let mapOpener = document.querySelector(".header__location");
let map = document.querySelector(".map");
let body = document.querySelector("body");

mapOpener.addEventListener("click", () => {
  map.classList.add("active");
  body.classList.add("lock");
});

let mapCloseByBG = document.querySelector(".map__bg");

let mapCloseByCross = document.querySelector(".map__close");

let closeMap = () => {
  map.classList.remove("active");
  body.classList.remove("lock");
};

mapCloseByBG.addEventListener("click", closeMap);
mapCloseByCross.addEventListener("click", closeMap);

// sertificates

let allCertificatesPrev = document.querySelectorAll(".intro__certificatesItem");
let sertificate = document.querySelector(".certificates");
let allSert = document.querySelectorAll(".certificates__item");
let sertCloser = document.querySelector(".certificates__close");
let sertBG = document.querySelector(".certificates__bg");

allCertificatesPrev.forEach((el) => {
  el.addEventListener("click", (e) => {
    const num = e.target.dataset.num;
    allSert.forEach((el) => {
      if (el.dataset.num === num) {
        el.classList.add("active");
        sertificate.classList.add("active");
      }
    });
  });
});

let closeAll = () => {
  sertificate.classList.remove("active");
  allSert.forEach((element) => {
    element.classList.remove("active");
  });
  body.classList.remove("lock");
};

sertCloser.addEventListener("click", closeAll);
sertBG.addEventListener("click", closeAll);

// slider

let slider = new Swiper(".slider__container", {
  loop: false,
  slidesPerView: 2.5,
  spaceBetween: 15,
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: ".intro__next",
    prevEl: ".intro__prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});

// burger menu

let burger = document.querySelector(".header__burger");
let burgerNav = document.querySelector(".burger__nav");
let burgerBG = document.querySelector(".burger__bg");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burgerNav.classList.toggle("active");
  burgerBG.classList.toggle("active");
  body.classList.toggle("lock");
});

burgerBG.addEventListener("click", () => {
  burger.classList.remove("active");
  burgerNav.classList.remove("active");
  burgerBG.classList.remove("active");
  body.classList.remove("lock");
});


// change language

const changeLanguage = (chooseLang) => {
  for (let key in lang[chooseLang]){
    document.getElementById(key).innerHTML = lang[chooseLang][key];
  }
}

const allLangItem = document.querySelectorAll('.header__langItem');
allLangItem.forEach(langItem => {
  langItem.addEventListener('click', (e) => {
    if (!e.target.classList.contains('active')){
      allLangItem.forEach(el => el.classList.remove('active'));
      e.target.classList.add('active');
      changeLanguage(e.target.dataset.lang);
    }
  });
});

const lang = {
  ru: {
    title: 'Unvent - Профессиональный монтаж дымоходов любой сложности на территории Киева и Киевской области',
    header__about: '<span>Профессиональный монтаж дымоходов</span> любой сложности на территории Киева и Киевской',
    header__adress: '<span>Украина, Киев,</span> Васильковская 30',
    lang__title: 'Выбор языка',
    header__consultation: 'Консультация инженера',
    link__calc: 'Калькулятор',
    link__calc__bg: 'Калькулятор',
    link__serv: 'Услуги',
    link__serv__bg: 'Услуги',
    link__news: 'наши новости',
    link__news__bg: 'наши новости',
    link__rev: 'Отзывы',
    link__rev__bg: 'Отзывы',
    link__cons: 'Консультация',
    link__cons__bg: 'Консультация',
    link__adv: 'преимущества',
    link__adv__bg: 'преимущества',
    link__factory: 'производство',
    link__factory__bg: 'производство',
    link__qa: 'вопрос-ответ',
    link__qa__bg: 'вопрос-ответ',
    link__contacts: 'контакты',
    link__contacts__bg: 'контакты',
    intro__heading: '<span>Монтаж дымоходов из нержавеющей стали</span> для частных домов и предприятий',
    intro__text1: '<span>лет устанавливаем дымоходы</span> для частных лиц и организаций',
    intro__text2: '<span>Бесплатный выезд инженера</span> в пределах 30 км. от Киева',
    intro__text3: '<span>Монтаж под ключ от 1 дня,</span> в наличии все разрешительные документы',
    intro__calcDescription: 'Рассчитайте стоимость монтажа вашего дымохода за 1 минуту и <span>получите скидку 15%</span>',
    intro__calcText: 'Рассчитать стоимость монтажа и получить скидку',
    intro__certTitle: 'Лицензии и сертификаты в наличии',


  },
  ua: {
    title: 'Unvent - Монтаж димоходов в Киеве и Киевской обл',
    header__about: '<span>Професійний монтаж димоходів</span> будь-якої складності в Києві та Київскій обл',
    header__adress: '<span>Україна, Київ,</span> Васильківська 30',
    lang__title: 'Вибір мови',
    header__consultation: 'Консультація інженера',
    link__calc: 'Калькулятор',
    link__calc__bg: 'Калькулятор',
    link__serv: 'Послуги',
    link__serv__bg: 'Послуги',
    link__news: 'наші новини',
    link__news__bg: 'наші новини',
    link__rev: 'відгуки ',
    link__rev__bg: 'відгуки ',
    link__cons: 'Консультація',
    link__cons__bg: 'Консультація',
    link__adv: 'ПЕРЕВАГИ',
    link__adv__bg: 'ПЕРЕВАГИ',
    link__factory: 'виробництво',
    link__factory__bg: 'виробництво',
    link__qa: 'питання-відповідь',
    link__qa__bg: 'питання-відповідь',
    link__contacts: 'контакти',
    link__contacts__bg: 'контакти',
    intro__heading: '<span>Монтаж димоходів із нержавіючої сталі</span> для приватних будинків та підприємств',
    intro__text1: '<span>років встановлюємо димоходи</span> для приватних осіб та організацій',
    intro__text2: '<span>Безкоштовний виїзд інженера</span> в межах 30 км. від Києва',
    intro__text3: '<span>Монтаж під ключ від 1 дня,</span> в наявності всі дозвільні документи',
    intro__calcDescription: "Розрахуйте вартість монтажу Вашого димоходу за 1 хвилину <span>отримайте знижку 15%</span>",
    intro__calcText: 'Розрахувати вартість монтажу і отримати знижку',
    intro__certTitle: 'Ліцензії та сертифікати в наявності',
  }
};
