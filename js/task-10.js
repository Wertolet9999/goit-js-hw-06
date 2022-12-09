const inputRef = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxContainerEl = document.querySelector('#boxes');
createBtnEl.addEventListener('click', createBoxes);

function createBoxes() {
  destroyBoxes();
  const boxArr = [];
  let size = 30;
  for (let i = 0; i < inputRef.value; i++){
    size += 10 * i;
    const markup =
      `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    boxArr.push(markup);
  }
  boxContainerEl.insertAdjacentHTML("beforeend", boxArr.join(""));
}
  destroyBtnEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxContainerEl.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

