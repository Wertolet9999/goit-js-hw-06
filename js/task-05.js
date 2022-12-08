const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const inputStart = event => { 
    if (event.target.value === "") {
        nameOutput.textContent = "Anonymous";
        return;
    }
    nameOutput.textContent = event.currentTarget.value;
}
nameInput.addEventListener("input", inputStart) 