const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $$$ = document.getElementsByTagName.bind(document);

const App = {
  vouncherList: [
    {
      path: "",
      img: "https://cdn.tgdd.vn/2023/06/banner/800-200-800x200-68.png",
    },
    {
      path: "",
      img: "https://cdn.tgdd.vn/2023/07/banner/800-200-800x200-39.png",
    },
    {
      path: "",
      img: "https://cdn.tgdd.vn/2023/07/banner/800-200-800x200-20.png",
    },
    {
      path: "",
      img: "https://cdn.tgdd.vn/2023/06/banner/800-200-800x200-46.png",
    },
    {
      path: "",
      img: "https://cdn.tgdd.vn/2023/06/banner/800x200-800x200-40.png",
    },
    {
      path: "",
      img: "https://cdn.tgdd.vn/2023/06/banner/800-200-800x200-53.png",
    },
    {
      path: "",
      img: "https://cdn.tgdd.vn/2023/06/banner/800-200-800x200-33.png",
    },
    {
      path: "",
      img: "https://cdn.tgdd.vn/2023/07/banner/800-200-800x200-34.png",
    },
    {
      path: "",
      img: "https://cdn.tgdd.vn/2023/06/banner/800-200-800x200-45.png",
    },
    {
      path: "",
      img: "https://cdn.tgdd.vn/2023/07/banner/800x200-800x200-19.png",
    },
    {
      path: "",
      img: "https://cdn.tgdd.vn/2023/06/banner/800x200-800x200-42.png",
    },
    {
      path: "",
      img: "https://cdn.tgdd.vn/2023/05/banner/800-200-copy-2-800x200-4.png",
    },
    {
      path: "",
      img: "https://cdn.tgdd.vn/2023/06/banner/800-200-800x200-41.png",
    },
    {
      path: "",
      img: "https://cdn.tgdd.vn/2023/06/banner/800x200-800x200-47.png",
    },
  ],
  RenderTopcarosel: function () {
    const slider = this.vouncherList.map((item) => {
      return `
      <div class="swiper-slide">
      <a href="">
        <img
          src="${item.img}"
          alt=""
        />
      </a>
    </div>
        `;
    });
    $(".caroselWraper").insertAdjacentHTML("afterbegin", slider.join(""));
  },
  SwiperMethod: function () {
    var swiper = new Swiper(".topBanner", {
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
    var swiper2 = new Swiper(".caroselSwiper", {
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 4000,
      },
      navigation: {
        nextEl: ".carosel-next",
        prevEl: ".carosel-prev",
      },
    });
  },

  Start: function () {
    this.RenderTopcarosel();
    this.SwiperMethod();
  },
};
App.Start();
