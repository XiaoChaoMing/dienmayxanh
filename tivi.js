import myJson from "./tivi.json" assert { type: "json" };
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
  HotProductList: [
    {
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "https://cdn.tgdd.vn/Products/Images/1942/235792/led-4k-samsung-ua55au8100-221122-040640-550x340.jpg",
      sticker: "https://cdn.tgdd.vn/2023/05/campaign/Label-200x200.png",
      installment: "0%",
      vouncher: "",
      price: "10.990.000₫",
      sale: "13.400.000₫ -17%",
      rate: 4,
      rateQuantity: 328,
      contents: "Giá rẻ quá: 10.990.000₫",
    },
    {
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "https://cdn.tgdd.vn/Products/Images/1942/235792/led-4k-samsung-ua55au8100-221122-040640-550x340.jpg",
      sticker: "https://cdn.tgdd.vn/2023/05/campaign/Label-200x200.png",
      installment: "0%",
      vouncher: "",
      price: "10.990.000₫",
      sale: "13.400.000₫ -17%",
      rate: 4,
      rateQuantity: 328,
      contents: "Giá rẻ quá: 10.990.000₫",
    },
    {
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "https://cdn.tgdd.vn/Products/Images/1942/235792/led-4k-samsung-ua55au8100-221122-040640-550x340.jpg",
      sticker: "https://cdn.tgdd.vn/2023/05/campaign/Label-200x200.png",
      installment: "0%",
      vouncher: "",
      price: "10.990.000₫",
      sale: "13.400.000₫ -17%",
      rate: 4,
      rateQuantity: 328,
      contents: "Giá rẻ quá: 10.990.000₫",
    },
    {
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "https://cdn.tgdd.vn/Products/Images/1942/235792/led-4k-samsung-ua55au8100-221122-040640-550x340.jpg",
      sticker: "https://cdn.tgdd.vn/2023/05/campaign/Label-200x200.png",
      installment: "0%",
      vouncher: "",
      price: "10.990.000₫",
      sale: "13.400.000₫ -17%",
      rate: 4,
      rateQuantity: 328,
      contents: "Giá rẻ quá: 10.990.000₫",
    },
    {
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "https://cdn.tgdd.vn/Products/Images/1942/235792/led-4k-samsung-ua55au8100-221122-040640-550x340.jpg",
      sticker: "https://cdn.tgdd.vn/2023/05/campaign/Label-200x200.png",
      installment: "0%",
      vouncher: "",
      price: "10.990.000₫",
      sale: "13.400.000₫ -17%",
      rate: 4,
      rateQuantity: 328,
      contents: "Giá rẻ quá: 10.990.000₫",
    },
    {
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "https://cdn.tgdd.vn/Products/Images/1942/235792/led-4k-samsung-ua55au8100-221122-040640-550x340.jpg",
      sticker: "https://cdn.tgdd.vn/2023/05/campaign/Label-200x200.png",
      installment: "0%",
      vouncher: "",
      price: "10.990.000₫",
      sale: "13.400.000₫ -17%",
      rate: 4,
      rateQuantity: 328,
      contents: "Giá rẻ quá: 10.990.000₫",
    },
    {
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "https://cdn.tgdd.vn/Products/Images/1942/235792/led-4k-samsung-ua55au8100-221122-040640-550x340.jpg",
      sticker: "https://cdn.tgdd.vn/2023/05/campaign/Label-200x200.png",
      installment: "0%",
      vouncher: "",
      price: "10.990.000₫",
      sale: "13.400.000₫ -17%",
      rate: 4,
      rateQuantity: 328,
      contents: "Giá rẻ quá: 10.990.000₫",
    },
    {
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "https://cdn.tgdd.vn/Products/Images/1942/235792/led-4k-samsung-ua55au8100-221122-040640-550x340.jpg",
      sticker: "https://cdn.tgdd.vn/2023/05/campaign/Label-200x200.png",
      installment: "0%",
      vouncher: "",
      price: "10.990.000₫",
      sale: "13.400.000₫ -17%",
      rate: 4,
      rateQuantity: 328,
      contents: "Giá rẻ quá: 10.990.000₫",
    },
    {
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "https://cdn.tgdd.vn/Products/Images/1942/235792/led-4k-samsung-ua55au8100-221122-040640-550x340.jpg",
      sticker: "https://cdn.tgdd.vn/2023/05/campaign/Label-200x200.png",
      installment: "0%",
      vouncher: "",
      price: "10.990.000₫",
      sale: "13.400.000₫ -17%",
      rate: 4,
      rateQuantity: 328,
      contents: "Giá rẻ quá: 10.990.000₫",
    },
    {
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "https://cdn.tgdd.vn/Products/Images/1942/235792/led-4k-samsung-ua55au8100-221122-040640-550x340.jpg",
      sticker: "https://cdn.tgdd.vn/2023/05/campaign/Label-200x200.png",
      installment: "0%",
      vouncher: "",
      price: "10.990.000₫",
      sale: "13.400.000₫ -17%",
      rate: 4,
      rateQuantity: 328,
      contents: "Giá rẻ quá: 10.990.000₫",
    },
    {
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "https://cdn.tgdd.vn/Products/Images/1942/235792/led-4k-samsung-ua55au8100-221122-040640-550x340.jpg",
      sticker: "https://cdn.tgdd.vn/2023/05/campaign/Label-200x200.png",
      installment: "0%",
      vouncher: "",
      price: "10.990.000₫",
      sale: "13.400.000₫ -17%",
      rate: 4,
      rateQuantity: 328,
      contents: "Giá rẻ quá: 10.990.000₫",
    },
    {
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "https://cdn.tgdd.vn/Products/Images/1942/235792/led-4k-samsung-ua55au8100-221122-040640-550x340.jpg",
      sticker: "https://cdn.tgdd.vn/2023/05/campaign/Label-200x200.png",
      installment: "0%",
      vouncher: "",
      price: "10.990.000₫",
      sale: "13.400.000₫ -17%",
      rate: 4,
      rateQuantity: 328,
      contents: "Giá rẻ quá: 10.990.000₫",
    },
  ],
  productList: myJson,
  categoryList: function (min, max) {
    this.company = [];
    this.screenSize = [];
    this.resolution = [];
    this.type = [];
    this.utilities = [];
    this.OS = [];
    this.minPrice = min;
    this.maxPrice = max;
  },
  inputRange: function () {
    let pricegap = 1000;
    $(".min-value").addEventListener("input", () => {
      let text = /^[a-zA-Z]+$/;
      if ($(".min-value").value.match(text)) {
        $(".min-value").value = "";
      }
      // $(".min-value").value = new Intl.NumberFormat().format(num);
      $$(".rangeInput input")[0].value = $(".min-value").value;
    });

    $$(".rangeInput input").forEach((input) => {
      input.addEventListener("input", (e) => {
        let minValue = parseInt($$(".rangeInput input")[0].value);
        let maxValue = parseInt($$(".rangeInput input")[1].value);
        if (maxValue - minValue < pricegap) {
          if (e.target.className.match("range-min")) {
            $$(".rangeInput input")[0].value = maxValue - pricegap;
          } else {
            $$(".rangeInput input")[1].value = minValue + pricegap;
          }
        } else {
          $(".range").style.left =
            (minValue / $$(".rangeInput input")[0].max) * 100 + "%";
          $(".range").style.right =
            100 - (maxValue / $$(".rangeInput input")[1].max) * 100 + "%";
        }
        $(".min-value").value = minValue;
        $(".max-value").value = maxValue;
      });
    });
  },
  handleOptionClick: function () {
    $$(".selected-option").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        item.classList.toggle("activeBtn");
        // console.log(item.getAttribute("values"));
      });
    });
  },

  fillterProduct: function () {
    // show the product
    $(".showProducts").addEventListener("click", () => {
      const fillterList = new this.categoryList(
        parseFloat($(".min-value").value),
        parseFloat($(".max-value").value)
      );
      $$(".activeBtn").forEach((item) => {
        if (item.parentNode.parentNode.classList.contains("brand")) {
          fillterList.company.push(item.getAttribute("values"));
        }
        if (item.parentNode.parentNode.classList.contains("screenSize")) {
          fillterList.screenSize.push(item.getAttribute("values"));
        }
        if (item.parentNode.parentNode.classList.contains("resolution")) {
          fillterList.resolution.push(item.getAttribute("values"));
        }
        if (item.parentNode.parentNode.classList.contains("tiviType")) {
          fillterList.type.push(item.getAttribute("values"));
        }
        if (item.parentNode.parentNode.classList.contains("utilities")) {
          fillterList.utilities.push(item.getAttribute("values"));
        }
        if (item.parentNode.parentNode.classList.contains("OS")) {
          fillterList.OS.push(item.getAttribute("values"));
        }
      });
      console.log(fillterList);
      // filter product
      const products = [
        ...new Set(
          this.productList.map((product) => {
            return product;
          })
        ),
      ];
      console.log(products);
      // key match & minPrice < product price < maxPrice
      const newProduct = products.filter((item) => {
        for (var key in fillterList) {
          if (
            Array.isArray(fillterList[key]) &&
            fillterList[key].includes(item[key]) &&
            fillterList.minPrice < parseFloat(item.price) / 1000 &&
            parseFloat(item.price) / 1000 < fillterList.maxPrice
          )
            return true;
        }
      });
      this.RenderProduct(newProduct);
      console.log(newProduct);
    });
  },
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
  RenderhotProduct: function (lists) {
    const swiperList = lists.map((item) => {
      return `
      <div class="swiper-slide h-full bg-white rounded-xl group min-w-[232px]">
      <a href="" class="flex flex-col py-3 h-full">
        <div class="w-fit bg-gray-100 p-1 ml-3">
          <p class="text-[11px]">Trả góp ${item.installment}</p>
        </div>
        <div class="basis-3/5 px-3 flex items-center overflow-hidden relative ">
          <img class="h-auto group-hover:translate-y-[-10px] transition duration-500 ease-in-out"src="${item.image}" alt="">
          <img class="absolute h-10 bottom-2 left-3 group-hover:translate-y-[-16px] transition duration-500 ease-in-out" src="${item.sticker}" alt="">
        </div>
          
          <div class="flex flex-col w-full justify-start px-3">
            <div class="flex items-center bg-gradient-to-r from-[#faab08] to-[#d42611] w-fit pr-3 rounded-full">
              <img class="h-5" src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2020/10/content/icon5-50x50.png" alt="">
              <p class="text-[11px] text-white leading-[19px] pl-1">GIÁ RẺ QUÁ</p>
            </div>
            <p class="text-[15px] py-1 group-hover:text-blue-500">${item.name}</p>
            <p class="py-1 text-red-700 font-semibold text-[20px]">${item.price}</p>
            <p class="">${item.contents}</p>
            <div class="w-full h-full flex items-center gap-x-1">
              <p class="font-medium text-orange-500">4.3</p>
              <img class="w-4 h-4" src="./image/star.png" alt="">
              <p class="text-gray-400">(510)</p>
            </div>
          </div>
        </a>
    </div>
      `;
    });
    $(".hotProductWraper").insertAdjacentHTML(
      "afterbegin",
      swiperList.join("")
    );
  },
  RenderProduct: function (Lists) {
    const ProductList = Lists.map((item) => {
      return `
      <div class="h-fit w-full">
      <div
        class="product bg-white min-h-[420px] h-[420px] w-full cursor-pointer group hover:shadow-2xl"
      >
        <a href="" class="flex flex-col py-3 h-full">
          <div class="w-fit bg-gray-100 p-1 ml-3">
            <p class="text-[11px]">Trả góp 0%</p>
          </div>
          <div
            class="basis-3/5 px-3 flex items-center overflow-hidden relative"
          >
            <img
              class="h-auto group-hover:translate-y-[-10px] transition duration-500 ease-in-out"
              src="https://cdn.tgdd.vn/Products/Images/1942/235794/led-4k-samsung-ua65au8100-221122-040829-550x340.jpg"
              alt=""
            />
            <img
              class="absolute h-10 bottom-2 left-3 group-hover:translate-y-[-16px] transition duration-500 ease-in-out"
              src="${item.sticker}"
              alt=""
            />
          </div>

          <div class="flex flex-col w-full justify-start px-3">
            <div
              class="flex items-center bg-gradient-to-r from-[#faab08] to-[#d42611] w-fit pr-3 rounded-full"
            >
              <img
                class="h-5"
                src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2020/10/content/icon5-50x50.png"
                alt=""
              />
              <p class="text-[11px] text-white leading-[19px] pl-1">
                GIÁ RẺ QUÁ
              </p>
            </div>
            <p class="text-[15px] py-1 group-hover:text-blue-500">
              ${item.name}
            </p>
            <p class="py-1 text-red-700 font-semibold text-[20px]">
              ${item.price.toLocaleString("en-US")} đ
            </p>
            
            <div class="flex gap-3 text-[14px] py-1">
                <p class="bg-gary-300 border-[1px] border-black p-1 rounded-md ">${
                  item.screenSize
                } inch</p>
                <p class="bg-gary-300 border-[1px] border-black p-1 rounded-md ">${
                  item.resolution
                }</p>
              </div>
            <p class="">${item.utilities}</p>
            <div class="w-full h-full flex items-center gap-x-1">
              <p class="font-medium text-orange-500">4.3</p>
              <img class="w-4 h-4" src="./image/star.png" alt="" />
              <p class="text-gray-400">(510)</p>
            </div>
          </div>
        </a>
      </div>
    </div>
      `;
    });
    $(".productList").innerHTML = ProductList.join("");
  },
  FilterHandleClick: function () {
    $(".maint-filter").addEventListener("click", (e) => {
      $(".fillterModal").classList.toggle("hidden");
      document.body.classList.toggle("overflow-hidden");
      window.scrollTo({
        top: 870,
        behavior: "smooth",
      });
      $(".maint-filter").classList.toggle("ftOverlay");
      $(".filter-overlay").classList.toggle("hidden");
    });
    $(".filter-overlay").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
    $(".closeBtn").addEventListener("click", (e) => {
      $(".fillterModal").classList.toggle("hidden");
      document.body.classList.remove("overflow-hidden");
      $(".maint-filter").classList.remove("ftOverlay");
      $(".filter-overlay").classList.toggle("hidden");
    });
    $(".fillterModal").addEventListener("click", (e) => {
      e.target.classList.toggle("hidden");
      document.body.classList.remove("overflow-hidden");
      $(".maint-filter").classList.remove("ftOverlay");
      $(".filter-overlay").classList.toggle("hidden");
    });
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
    var swiper3 = new Swiper(".hotProductSwiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      breakpoints: {
        640: { slidesPerView: 5, spaceBetween: 10 },
      },
      navigation: {
        nextEl: ".hotproduct-next",
        prevEl: ".hotproduct-prev",
      },
    });
  },

  Start: function () {
    this.RenderTopcarosel();
    this.RenderhotProduct(this.HotProductList);
    this.SwiperMethod();
    this.fillterProduct();
    this.FilterHandleClick();
    this.inputRange();
    this.RenderProduct(this.productList);
    this.handleOptionClick();
  },
};
App.Start();
