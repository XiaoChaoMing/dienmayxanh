const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $$$ = document.getElementsByTagName.bind(document);

const App = {
  SwiperMethod: function () {
    var swiper8 = new Swiper(".topBanner", {
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 4000,
      },
      navigation: {
        nextEl: ".topbarNext",
        prevEl: ".topbarPrev",
      },
    });
  },

  Start: function () {
    this.SwiperMethod();
  },
};
App.Start();
