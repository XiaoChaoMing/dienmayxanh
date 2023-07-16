const smartTvs = [];

for (let i = 0; i < 40; i++) {
  const company = [
    "Samsung",
    "LG",
    "Sony",
    "TCL",
    "Casper",
    "Sharp",
    "TOSHIBA",
    "iFFALCON",
  ][Math.floor(Math.random() * 8)];
  const screenSize = ["32", "40", "42", "43", "48", "49", "50", "55", "58"][
    Math.floor(Math.random() * 9)
  ];
  const resolution = ["HD", "Full HD", "4K", "8K"][
    Math.floor(Math.random() * 4)
  ];
  const type = [
    "Smart TV",
    "Tivi OLED",
    "Tivi Android",
    "Google TV",
    "Tivi QLED",
    "Tivi Nanocell",
    "Tivi Mini LED",
    "Tivi thiết kế đặc biệt",
  ][Math.floor(Math.random() * 8)];
  const utilities = [
    "Chơi game trên tivi",
    "Điều khiển bằng giọng nói",
    "Chia sẻ màn hình điện thoại lên tivi",
    "Trợ lý ảo Google Assistant",
    "Điều khiển bằng điện thoại",
  ][Math.floor(Math.random() * 5)];
  const OS = ["Android", "WebOS", "TizenOS", "Google TV", "Linux"][
    Math.floor(Math.random() * 5)
  ];
  const price = Math.floor(Math.random() * 40000000);
  const name = `${company} ${screenSize} ${resolution} ${type}`;

  smartTvs.push({
    company,
    screenSize,
    resolution,
    type,
    utilities,
    OS,
    price,
    name,
  });
}
const json = JSON.stringify(smartTvs, null, 2);

console.log(json);
