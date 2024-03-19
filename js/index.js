const colors = [
  { name: "Красный", hex: "#FF0000" },
  { name: "Синий", hex: "#0000FF" },
  { name: "Зеленый", hex: "#00FF00" },
  { name: "Желтый", hex: "#FFFF00" },
  { name: "Пурпурный", hex: "#800080" },
  { name: "Оранжевый", hex: "#FFA500" },
  { name: "Розовый", hex: "#FFC0CB" },
  { name: "Черный", hex: "#000000" },
  { name: "Серый", hex: "#808080" },
];

const makeMarkUpOfColors = makeMarkUp(colors);
const colorsMarkUp = document.querySelector(".js_colors");

colorsMarkUp.innerHTML = makeMarkUpOfColors;

function makeMarkUp(colors) {
  return colors
    .map(({ name, hex }) => {
      return `
<div class='color-card'>
<div 
class='color-swatch' data-name=${name} data-hex=${hex} 
style=' background-color: ${hex} '></div>
<div class='color-meta'>
<h1>Имя: ${name}</h1>
<p>hex: ${hex}</p></div>
</div>`;
    })
    .join("");
}

const bgcolor = document.querySelector(".color-swatch");
const colorCard = document.querySelector(".color-card");
colorCard.addEventListener("click", () => {
  colorCard.classList.add("active");
});
