const inputCheckRef = document.querySelector("[data-length='6']")
const inputCol = event => {
    if (inputCheckRef.dataset.length == event.target.value.length) {
        inputCheckRef.classList.add("valid");
        return;
    }
        inputCheckRef.classList.add("invalid");
}
const remClass = event => {
    inputCheckRef.classList.remove("valid");
    inputCheckRef.classList.remove("invalid");
}
inputCheckRef.addEventListener("focus", remClass);
inputCheckRef.addEventListener("blur", inputCol);
