var swiper = new Swiper(".mySwiper", {
  speed: 900,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  speed: 900,
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper3", {
  speed: 900,
  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
