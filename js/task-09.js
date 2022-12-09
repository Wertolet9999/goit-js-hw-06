const bodyRef = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
function getRandomHexColor() {
  const selectColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  bodyRef.style.backgroundColor = selectColor;
  textEl.textContent = selectColor;
}
btnEl.addEventListener('click', getRandomHexColor)
