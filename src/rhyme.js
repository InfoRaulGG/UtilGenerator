//Attrs
const url = "https://www.datamuse.com/api/";
const queryMaps = "?rel_rhy=";
var inputField;
var btnRhyme;

// onInit
const onLoadRhyme = () => {
    inputField = document.querySelector("#wordRhymeInput");
    btnRhyme = document.querySelector("#btnRhyme");

    inputField.addEventListener("keydown", validateInputWord);
    inputField.addEventListener("change", validateInputWord);
    btnRhyme.addEventListener("click", rhymeCalculate);
}

// Actions
const rhymeCalculate = () => {
    const rhymeResults = document.querySelector("#rhymeResults");
    rhymeResults.style.display = "block";
}


// Aux Methods
const validateInputWord = () => {
    if (inputField.value && !/\s/.test(inputField.value)) {
        inputField.classList.remove("no-valid");
        inputField.classList.add("valid");
        btnRhyme.disabled = false;
    } else {
        inputField.classList.add("no-valid");
        inputField.classList.remove("valid");
        btnRhyme.disabled = true;
    }
}