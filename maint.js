const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $$$ = document.getElementsByTagName.bind(document);

const App = {
  vouncherList: [
    {
      path: "",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/hotsale-720-220-720x220.png",
    },
    {
      path: "",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/720-220-720x220-43.png",
    },
    {
      path: "",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/720x220-720x220-105.png",
    },
    {
      path: "",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/720x220-720x220-51.png",
    },
    {
      path: "",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/720x220-720x220-92.png",
    },
    {
      path: "",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/720x220-720x220-49.png",
    },
    {
      path: "",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/720x220-720x220-78.png",
    },
    {
      path: "",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/720-220-720x220-82.png",
    },
    {
      path: "",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/720x220-720x220-56.png",
    },
    {
      path: "",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/720-220-720x220-58.png",
    },
    {
      path: "",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/05/banner/720-220-720x220-71.png",
    },
    {
      path: "",
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/720x220--1--720x220-4.png",
    },
  ],
  flashSaleList: [
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/9758/251576/pacific-vigilon-3.0-27.5-inch-xanh-la-thumb-600x600.jpg",
      name: "Pacific Vigilon 3.0 27.5 inch",
      price: "6.795.000₫",
      sale: "-50%",
      quantity: "30",
      itemsRemaint: "30",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/1942/293021/android-tivi-sharp-4k-50-inch-4t-c-101022-112216-550x340.jpg",
      name: "Sharp Android TV 4T-C55EK2X",
      price: "8.990.000₫ ",
      sale: "-25%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/9218/276980/xe-dap-tap-the-duc-airbike-sport-mk288-fix-thumb-600x600.jpg",
      name: "Xe Đạp Tập Thể Dục Airbike Sport MK-288",
      price: "3.844.000₫ ",
      sale: "-45%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/258047/samsung-galaxy-z-flip4-5g-128gb-thumb-tim-600x600.jpg",
      name: "Samsung Galaxy Z Flip4 5G 128GB",
      price: "15.990.000₫ ",
      sale: "-33%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/1944/248783/may-giat-aqua-8-kg-aqw-ks80gt-s-201021-093359-600x600.jpg",
      name: "Aqua 8 Kg AQW-KS80GT S",
      price: "4.890.000₫",
      sale: "-33%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/3385/233037/ro-mutosi-mp-290sk-9-loi-140223-054510-600x600-1-600x600.jpg",
      name: "Aqua 8 Kg AQW-KS80GT S",
      price: "4.890.000₫",
      sale: "-33%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/3385/233037/ro-mutosi-mp-290sk-9-loi-140223-054510-600x600-1-600x600.jpg",
      name: "Aqua 8 Kg AQW-KS80GT S",
      price: "4.890.000₫",
      sale: "-33%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/3385/233037/ro-mutosi-mp-290sk-9-loi-140223-054510-600x600-1-600x600.jpg",
      name: "Aqua 8 Kg AQW-KS80GT S",
      price: "4.890.000₫",
      sale: "-33%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/3385/233037/ro-mutosi-mp-290sk-9-loi-140223-054510-600x600-1-600x600.jpg",
      name: "Aqua 8 Kg AQW-KS80GT S",
      price: "4.890.000₫",
      sale: "-33%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/3385/233037/ro-mutosi-mp-290sk-9-loi-140223-054510-600x600-1-600x600.jpg",
      name: "Aqua 8 Kg AQW-KS80GT S",
      price: "4.890.000₫",
      sale: "-33%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/3385/233037/ro-mutosi-mp-290sk-9-loi-140223-054510-600x600-1-600x600.jpg",
      name: "Aqua 8 Kg AQW-KS80GT S",
      price: "4.890.000₫",
      sale: "-33%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/3385/233037/ro-mutosi-mp-290sk-9-loi-140223-054510-600x600-1-600x600.jpg",
      name: "Aqua 8 Kg AQW-KS80GT S",
      price: "4.890.000₫",
      sale: "-33%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/3385/233037/ro-mutosi-mp-290sk-9-loi-140223-054510-600x600-1-600x600.jpg",
      name: "Aqua 8 Kg AQW-KS80GT S",
      price: "4.890.000₫",
      sale: "-33%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/3385/233037/ro-mutosi-mp-290sk-9-loi-140223-054510-600x600-1-600x600.jpg",
      name: "Aqua 8 Kg AQW-KS80GT S",
      price: "4.890.000₫",
      sale: "-33%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/3385/233037/ro-mutosi-mp-290sk-9-loi-140223-054510-600x600-1-600x600.jpg",
      name: "Aqua 8 Kg AQW-KS80GT S",
      price: "4.890.000₫",
      sale: "-33%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/3385/233037/ro-mutosi-mp-290sk-9-loi-140223-054510-600x600-1-600x600.jpg",
      name: "Aqua 8 Kg AQW-KS80GT S",
      price: "4.890.000₫",
      sale: "-33%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/3385/233037/ro-mutosi-mp-290sk-9-loi-140223-054510-600x600-1-600x600.jpg",
      name: "Aqua 8 Kg AQW-KS80GT S",
      price: "4.890.000₫",
      sale: "-33%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
    {
      img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/3385/233037/ro-mutosi-mp-290sk-9-loi-140223-054510-600x600-1-600x600.jpg",
      name: "Aqua 8 Kg AQW-KS80GT S",
      price: "4.890.000₫",
      sale: "-33%",
      quantity: "30",
      itemsRemaint: "20",
      path: "",
    },
  ],
  itemList: [
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
  categoryList: [
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Tivi-128x129.png",
      name: "Tivi",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Tivi-128x129.png",
      name: "Tivi",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Tivi-128x129.png",
      name: "Tivi",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Tivi-128x129.png",
      name: "Tivi",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Tivi-128x129.png",
      name: "Tivi",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Maylanh-128x129-128x129-1.png",
      name: "Máy lạnh",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
    {
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/tu-dong-128x129.png",
      name: "Tủ đông",
    },
  ],
  dailyCategoryList: [
    {
      id: 1,
      icon: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/homev2/goiy-1.png",
      content: "Cho bạn",
    },
    {
      id: 2,
      icon: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2022/10/campaign/Frame-232385-50x54-1.png",
      content: "Sản phẩm cao cấp",
    },
    {
      id: 3,
      icon: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/07/campaign/100x100-280x280.png",
      content: "Nồi cơm chỉ từ 370.000đ",
    },
    {
      id: 4,
      icon: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/07/campaign/100x100--2--280x280.png",
      content: "Máy ép chỉ từ 690.000đ",
    },
  ],
  producLists: [
    {
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/forYou/236313-1-2-600x600.webp",
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
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/forYou/android-tivi-sharp-4k-50-inch-4t-c-101022-112216-550x340.webp",
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
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/forYou/apple-watch-se-2022-thumbnew-1-1-600x600.webp",
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
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/forYou/ava-tp40-ct01e-18-lit-thumb-300x300.webp",
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
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/forYou/camera-ip-360-do-1080p-ezviz-c6n-trang-thumb-600x600.webp",
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
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/forYou/cao-cap-airbike-sport-mk-327-040323-124141-600x600.webp",
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
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/forYou/led-4k-samsung-ua50au8100-221122-040529-550x340.webp",
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
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/forYou/macbook-air-m1-2020-gray-600x600.webp",
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
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/forYou/may-giat-aqua-8-kg-aqw-ks80gt-s-201021-093359-600x600.webp",
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
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/forYou/may-lam-mat-khong-khi-kangaroo-kg50f79-201022-050735-600x600.webp",
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
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/forYou/noi-chien-khong-dau-rapido-raf-70m-7-lit-190423-095911-600x600.webp",
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
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/forYou/pacific-blizzard-60-275-inch-trang-thumb-600x600.webp",
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
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/forYou/pacific-vigilon-3.0-27.5-inch-xanh-la-thumb-600x600.webp",
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
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/forYou/ro-mutosi-mp-290sk-9-loi-140223-054510-600x600-1-600x600.webp",
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
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/forYou/ro-sunhouse-sha8866k-7-loi-150223-101827-600x600.webp",
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
      id: 1,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/forYou/samsung-galaxy-z-flip4-5g-128gb-thumb-tim-600x600.webp",
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
      id: 2,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/highEnd/279962-600x600.webp",
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
      id: 2,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/highEnd/282301-600x600.webp",
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
      id: 2,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/highEnd/delites-ncr1502-281022-033255-600x600.webp",
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
      id: 2,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/highEnd/hafele-je230-bl-1-600x600.webp",
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
      id: 2,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/highEnd/may-giat-say-lg-inverter-15-kg-f2515rtgb-0-600x600.webp",
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
      id: 2,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/highEnd/panasonic-pavh-mj-l500sra-10-600x600.webp",
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
      id: 2,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/highEnd/samsung-rf48a4000b4-sv-1.-600x600.webp",
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
      id: 2,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/highEnd/samsung-vr05r5050wk-sv-100423-014048-600x600.webp",
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
      id: 2,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/highEnd/say-samsung-11kg-wd11t734dbx-sv-1.-2-600x600.webp",
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
      id: 2,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/highEnd/smart-qled-4k-75-inch-samsung-qa75q60b-(62).webp",
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
      id: 2,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/highEnd/toshiba-gr-rf610we-pgv-22-xk-ava-300x300.webp",
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
      id: 2,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/highEnd/may-giat-say-lg-inverter-15-kg-f2515rtgb-0-600x600.webp",
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
      id: 2,
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
      id: 2,
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
      id: 3,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/Cooked/ava-tp40-ct01e-18-lit-thumb-300x300.webp",
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
      id: 3,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/Cooked/delites-ncg1805-thumb-300x300.webp",
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
      id: 3,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/Cooked/delites-ncr1502-281022-033255-600x600.webp",
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
      id: 3,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/Cooked/kangaroo-12-lit-kg12rc1-121021-075103-600x600.webp",
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
      id: 3,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/Cooked/noi-com-dien-nap-gai-18l-crystal-x2522-291122-101108-600x600.webp",
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
      id: 3,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/Cooked/noi-com-dien-tu-sunhouse-1-lit-shd8802-260423-034635-600x600.webp",
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
      id: 3,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/Cooked/noi-com-nap-roi-sunhouse-shd8125-thumb-300x300.webp",
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
      id: 3,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/Cooked/product-300024-110123-103533-600x600.webp",
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
      id: 3,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/Cooked/tu-kangaroo-18-lit-kg18dr7-050722-103226-600x600.webp",
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
      id: 3,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/Cooked/tu-tefal-1-lit-easy-rice-compact-rk73-13-300x300.webp",
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
      id: 4,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/another/ava-aj02-16-600x600.webp",
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
      id: 4,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/another/ava-gs-331-01-300x300.webp",
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
      id: 4,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/another/delites-gs-375-thumb-600x600.webp",
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
      id: 4,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/another/GS-329-600x600-1.webp",
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
      id: 4,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/another/hafele-gs-353-17-600x600.webp",
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
      id: 4,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/another/hommy-gs-321-thumb-1-300x300.webp",
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
      id: 4,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/another/may-ep-cham-ava-jr-319-140423-053240-600x600.webp",
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
      id: 4,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/another/may-ep-cham-ferroli-fsj-150m-140423-054443-600x600.webp",
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
      id: 4,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image:
        "./image/product/another/may-ep-cham-sunhouse-shd5512-190623-050842-600x600.webp",
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
      id: 4,
      name: "Samsung Smart TV Crystal UHD UA55AU8100",
      className: "TV",
      image: "./image/product/another/tefal-ze420d38-17-300x300.webp",
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
  bannerLists: [
    {
      id: 1,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//News/Thumb/1537005/KV-T7-1200x628.jpg",
      content:
        "Săn sale tháng 7, Smartphone Samsung giảm hết sảy đến 13 triệu. Mua ngay!",
    },
    {
      id: 1,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//News/Thumb/1536983/KV-T7-1200x628.jpg",
      content:
        "Săn sale tháng 7, Smartphone Samsung giảm hết sảy đến 13 triệu. Mua ngay!",
    },
    {
      id: 1,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//News/Thumb/1537117/OG-1200x629.jpg",
      content:
        "Săn sale tháng 7, Smartphone Samsung giảm hết sảy đến 13 triệu. Mua ngay!",
    },
    {
      id: 1,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//News/Thumb/912096/TU-VAN-CHON-MUA-THEO-HANG-760x367.jpg",
      content:
        "Săn sale tháng 7, Smartphone Samsung giảm hết sảy đến 13 triệu. Mua ngay!",
    },
    {
      id: 1,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//News/Thumb/1298778/Diện-máy--3--760x367.jpg",
      content:
        "Săn sale tháng 7, Smartphone Samsung giảm hết sảy đến 13 triệu. Mua ngay!",
    },
    {
      id: 1,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//News/Thumb/911910/8-THUONG-HIEU-1-760x367.jpg",
      content:
        "Săn sale tháng 7, Smartphone Samsung giảm hết sảy đến 13 triệu. Mua ngay!",
    },
    {
      id: 2,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/banner/samsung-390x210.png",
    },
    {
      id: 2,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/07/banner/gd-online-390x210.png",
    },
    {
      id: 2,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/banner/dung-cu-gd-390x210.png",
    },
    {
      id: 2,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/banner/390x210-390x210-2.png",
    },
    {
      id: 2,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/04/banner/390x210-390x210-1.png",
    },
    {
      id: 3,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/760x400-760x400-13.png",
    },
    {
      id: 3,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/07/banner/GTN-760-400-760x400.png",
    },
    {
      id: 3,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/760x400-760x400-9.jpg",
    },
    {
      id: 3,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/banner/760x400-760x400-11.png",
    },
    {
      id: 3,
      image:
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/07/banner/760x400-760x400.jpg",
    },
  ],
  RenderVoucherList: function (list) {
    const swiperSlider = list.map((voucher) => {
      return `
      <div class="swiper-slide">
                  <a href="${voucher.path}">
                    <img class="rounded-lg"src="${voucher.img}" alt="">
                  </a>
      </div>
      `;
    });

    $(".voucher-wrapper").insertAdjacentHTML(
      "afterbegin",
      swiperSlider.join("")
    );
  },
  RenderVouncherbanner: function (lists) {
    const swiperSlider = lists.map((list) => {
      return `
      <div class="swiper-slide centerContent rounded-xl group px-2" >
                    <a href="" class="flex flex-col items-center py-2 h-full">
                    <div class="swiper-wrapper basis-3/5 flex items-center overflow-hidden">
                      <img class="rounded-lg h-auto group-hover:translate-y-[-10px] transition duration-500 ease-in-out"src="${list.img}" alt="">
                    </div>
                      
                      <div class="flex flex-col items-center">
                        <p class="text-center text-[15px] py-2 group-hover:text-blue-500">${list.name}</p>
                        <p class="py-2 text-red-700 font-semibold text-[20px]">${list.price}</p>
                        <div class="flex relative py-2 after:content-['Còn_''${list.itemsRemaint}/${list.quantity}''_suất'] after:bg-transparent after:absolute after:text-[13px] after:left-9 after:leading-[19px]">
                          <img class="h-7 w-6 absolute top-[-1%] left-[-6px]" src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/fs-iconfire.png" alt="">
                          <input class="rounded-xl overflow-hidden appearance-none bg-gray-300 h-5 w-[150px] " type="range" name="" id="" min="0" max="${list.quantity}" step="1" value="${list.itemsRemaint}">
                          
                        </div>
                      </div>
                    </a>
                  </div>
      `;
    });
    $(".flashSaleWrapper").insertAdjacentHTML(
      "afterbegin",
      swiperSlider.join("")
    );
  },
  RenderSwiperlist: function (lists) {
    const swiperList = lists.map((item) => {
      return `
      <div class="swiper-slide h-full bg-white rounded-xl group">
      <a href="" class="flex flex-col  py-3 h-full">
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
    $(".hotDealWrapper").insertAdjacentHTML("afterbegin", swiperList.join(""));
  },
  Render7DayPromo: function (lists) {
    const swiperList = lists.map((item) => {
      return `
      <div class="swiper-slide h-full group bg-white" >
      <a href="">
      <img class="absolute -z-0 w-full h-full" src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/06/campaign/Frame-DESK-221x477-1.png" alt="">
                    <div href="" class="flex flex-col  py-2 h-full bg-white w-full">
                      <div class="w-fit bg-gray-100 p-1 ml-3">
                        <p class="text-[11px]">Trả góp ${item.installment}</p>
                      </div>
                    <div class="basis-3/6 mx-2 flex items-center overflow-hidden">
                      <img class="rounded-lg h-auto group-hover:translate-y-[-10px] transition duration-500 ease-in-out"src="https://cdn.tgdd.vn/Products/Images/1942/235792/led-4k-samsung-ua55au8100-221122-040640-550x340.jpg" alt="">
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
                    </div>
      </a>
                    
                  </div>
      `;
    });
    $(".wraper7Day").insertAdjacentHTML("afterbegin", swiperList.join(""));
  },
  RenderCategory: function (lists) {
    const swiperList = lists.map((item) => {
      return `
      <div class="swiper-slide centerContent">
                  <a href="" class="flex flex-col items-center">
                    <img class="h-16 w-16" src="${item.image}" alt="">
                    <p class="pt-2 text-[15px]">${item.name}</p>
                  </a>
                </div>
      `;
    });
    $(".cateWrapper").insertAdjacentHTML("afterbegin", swiperList.join(""));
  },
  RenderOption: function (lists) {
    const btnsList = lists.map((item) => {
      return `
      <div class="option-btn bg-white rounded-xl flex items-center justify-center gap-x-2 w-[285px] py-2 cursor-pointer transition"  onclick='App.filterProduct(${item.id}),App.handleclick(${item.id})'>
              <img class="h-full" src="${item.icon}" alt="">
              <p>${item.content}</p>
            </div>
      `;
    });
    $(".optionWrapper").insertAdjacentHTML("afterbegin", btnsList.join(""));
    $$(".option-btn")[0].classList.add("active_cateBtn");
  },
  RenderProductList: function (lists) {
    const productList = lists.map((item) => {
      return `
      <div class="product bg-white h-[480px] w-full cursor-pointer group">
                <a href="" class="flex flex-col  py-3 h-full">
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
    $(".productWrapper").innerHTML = productList.join("");
  },
  RenderAdvise: function (lists) {
    const productList = lists.map((item) => {
      return `
      <div class="swiper-slide">
                        <a href="">
                          <img class="h-24 w-44" src="${item.image}" alt="">
                          <p class="w-44 truncate overflow-hidden ">${item.content}</p>
                        </a>
                      </div>
      `;
    });
    $(".adviseWrapper").innerHTML = productList.join("");
  },
  RenderTrademark: function (lists, position) {
    const productList = lists.map((item) => {
      return `
      <div class="swiper-slide">
                      <a href="">
                        <img class="rounded-xl" src="${item.image}" alt="">
                      </a>
                    </div>
      `;
    });
    $(`.${position}`).innerHTML = productList.join("");
  },
  handleclick: function (id) {
    $$(".option-btn").forEach((item, index) => {
      item.classList.remove("active_cateBtn");
      if (id === index + 1) item.classList.add("active_cateBtn");
    });
  },
  filterProduct: function (id) {
    const filterProduct = [
      ...new Set(
        this.producLists.map((product) => {
          return product;
        })
      ),
    ];
    const filterCategory = filterProduct.filter((product) => {
      if (product.id === id) return true;
    });
    this.RenderProductList(filterCategory);
  },
  filterCategory: function () {
    const filter = [
      ...new Set(
        this.dailyCategoryList.map((category) => {
          return category;
        })
      ),
    ];

    this.RenderOption(filter);
  },
  windowScroll: function () {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 970
        ? $(".adOverlay").classList.remove("hidden")
        : $(".adOverlay").classList.add("hidden");
    });
  },
  HandleZaloClick: function () {
    $(".boxChat").classList.toggle("hidden");
  },
  SwiperMethod: function () {
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper2 = new Swiper(".vouncherSwiper", {
      loop: true,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
      slidesPerGroupSkip: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".Vbtn_Next",
        prevEl: ".Vbtn_Prev",
      },
    });

    var swiper3 = new Swiper(".flashSaleSwiper", {
      slidesPerView: 6,
      slidesPerGroup: 6,
      slidesPerGroupSkip: 0,
      grid: {
        rows: 2,
      },
      spaceBetween: 10,
      navigation: {
        nextEl: ".flashSaleNext",
        prevEl: ".flashSalePrev",
      },
    });
    var swiper4 = new Swiper(".hotDealSwiper", {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 5,
      slidesPerGroupSkip: 0,
      navigation: {
        nextEl: ".hotDealNext",
        prevEl: ".hotDealPrev",
      },
    });
    var swiper5 = new Swiper(".swiper7Day", {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 5,
      slidesPerGroupSkip: 0,
      navigation: {
        nextEl: ".promo7-DayNext",
        prevEl: ".promo7-DayPrev",
      },
    });
    var swiper6 = new Swiper(".cateSwiper", {
      slidesPerView: 10,
      spaceBetween: 10,
      slidesPerGroup: 5,
      grid: {
        rows: 2,
      },
      slidesPerGroupSkip: 0,
    });
    var swiper7 = new Swiper(".adviseSwipwer", {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 3,
      slidesPerGroupSkip: 0,
    });
    var swiper8 = new Swiper(".tradeMarkSwiper", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 2,
      slidesPerGroupSkip: 0,
      autoplay: {
        delay: 4000,
      },
      navigation: {
        nextEl: ".TMbtn_Next",
        prevEl: ".TMbtn_Prev",
      },
    });
    var swiper9 = new Swiper(".newChainSwiper", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 2,
      slidesPerGroupSkip: 0,
      autoplay: {
        delay: 4800,
      },
      navigation: {
        nextEl: ".NCbtn_Next",
        prevEl: ".NCbtn_Prev",
      },
    });
  },
  Start: function () {
    this.RenderVoucherList(this.vouncherList);
    this.RenderVouncherbanner(this.flashSaleList);
    this.RenderSwiperlist(this.itemList);
    this.Render7DayPromo(this.itemList);
    this.RenderCategory(this.categoryList);
    this.RenderProductList(
      this.producLists.filter((product) => {
        if (product.id === 1) return product;
      })
    );
    this.RenderAdvise(
      this.bannerLists.filter((banner) => {
        if (banner.id === 1) return banner;
      })
    );
    this.RenderTrademark(
      this.bannerLists.filter((banner) => {
        if (banner.id === 2) return banner;
      }),
      "tradeMarkWraper"
    );
    this.RenderTrademark(
      this.bannerLists.filter((banner) => {
        if (banner.id === 3) return banner;
      }),
      "newChainWraper"
    );
    this.filterCategory();
    this.SwiperMethod();
    this.windowScroll();
  },
};
App.Start();
