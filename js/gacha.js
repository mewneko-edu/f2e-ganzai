const drawBtn = document.getElementById("drawBtn");
const candy = document.getElementById("candy");
const result = document.getElementById("result");

const pool = [
  { name: "可樂糖", img: "img/banner/banner_c1.svg", rate: 20 },
  { name: "陀螺", img: "img/banner/banner_c2.svg", rate: 10 },
  { name: "劍玉", img: "img/banner/banner_c3.svg", rate: 10 },
  { name: "牙膏巧克力", img: "img/banner/banner_c4.svg", rate: 10 },
  { name: "嗶嗶糖", img: "img/banner/banner_c5.svg", rate: 10 },
  { name: "溜溜球", img: "img/banner/banner_c6.svg", rate: 10 },
  { name: "足球巧克力", img: "img/banner/banner_c7.svg", rate: 10 },
  { name: "麵茶", img: "img/banner/banner_c8.svg", rate: 10 },
  { name: "口紅糖", img: "img/banner/banner_c9.svg", rate: 10 }
];
function drawCandy() {
  const total = pool.reduce((sum, item) => sum + item.rate, 0);
  let r = Math.random() * total;

  for (let item of pool) {
    if (r < item.rate) return item;
    r -= item.rate;
  }
  
}

drawBtn.addEventListener("click", () => {
  const picked = drawCandy();

  // 重置動畫
  candy.classList.remove("is-rolling");
  void candy.offsetWidth; // 強制 reflow

  candy.src = picked.img;
  candy.classList.add("is-rolling");

  result.textContent = "抽獎中…";

  setTimeout(() => {
    result.textContent = `你抽到了：${picked.name}`;
  }, 1200);
});
