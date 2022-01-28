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
