//Attrs
const url = "https://api.datamuse.com/words";
const queryMaps = "?rel_rhy=";
const proxyCors = "https://cors-anywhere.herokuapp.com/";
var inputField;
var btnRhyme;
var pnlResultsRhyme;

// onInit
const onLoadRhyme = () => {
    inputField = document.querySelector("#wordRhymeInput");
    btnRhyme = document.querySelector("#btnRhyme");
    pnlResultsRhyme = document.querySelector("#pnlResultsRhyme")


    inputField.addEventListener("keydown", validateInputWord);
    inputField.addEventListener("keyup", validateInputWord);
    inputField.addEventListener("change", validateInputWord);
    btnRhyme.addEventListener("click", rhymeCalculate);
}

// Actions
const rhymeCalculate = async() => {
    showLoader();
    const rhymeResults = document.querySelector("#rhymeResults");
    const endpoint = url + queryMaps + inputField.value;
    try {
        const response = await fetch(proxyCors + endpoint, {
            method: "GET",
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            cache: "no-cache",
            dataType: 'json',
        });
        let data = await response.json();
        printRhymes(data);
    } catch (error) {
        showErrorPanel();
        console.log(error);
    }
    hideLoader();
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
const printRhymes = (data) => {
    data = data.slice(0, 10);
    rhymeResults.style.display = "block";
    if (!data.length) {
        pnlResultsRhyme.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
        return;
    }

    let wordList = [];
    for (let i = 0; i < Math.min(data.length, 10); i++) {
        // creating a list of words
        wordList.push(`<li>${data[i].word}</li>`);
    }

    wordList = wordList.join("");
    pnlResultsRhyme.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
    return;
};

const showErrorPanel = () => {
    pnlResultsRhyme.innerHTML = `
    <p>Try again!</p><p>Anything not work! Mudkip is trying to fix!</p>
    <img style="width: 150px;" src="./assets/img/fail-pokemon.gif">
    `
}