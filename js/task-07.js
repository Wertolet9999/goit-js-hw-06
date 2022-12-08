const inputSliderEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputSliderEl.addEventListener('input', (event) => {
    textEl.style.fontSize = inputSliderEl.value + "px"
})
