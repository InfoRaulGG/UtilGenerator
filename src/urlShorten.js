const apiKey = "35b6973533d04fdbb93a61729ed03946";
const urlShorten = 'https://api.rebrandly.com/v1/links';
var inputUrlField;
var btnUrlShorten;
var pnlResultsUrl;
var urlShortenResults;
const onLoadUrlShorten = () => {
    inputUrlField = document.querySelector("#urlShortenInput");
    btnUrlShorten = document.querySelector("#btnUrlShorten");
    pnlResultsUrl = document.querySelector("#pnlResultsUrlShorten");
    urlShortenResults = document.querySelector("#urlShortenResults");

    inputUrlField.addEventListener("keydown", validateInputUrl);
    inputUrlField.addEventListener("keyup", validateInputUrl);
    inputUrlField.addEventListener("change", validateInputUrl);
    btnUrlShorten.addEventListener("click", shortenUrl);
};

const shortenUrl = async() => {
    showLoader();

    const data = JSON.stringify({ destination: inputUrlField.value })
    try {
        const response = await fetch(urlShorten, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'apikey': apiKey
            },
            body: data
        });

        if (response.ok) {
            const results = await response.json();
            printUrlResult(results);
        } else {
            showErrorPanelUrlShorten();
        }

    } catch (error) {
        console.log(error);
        showErrorPanelUrlShorten();
    }

    hideLoader();
};

const printUrlResult = (res) => {
    if (res.errors) {
        pnlResultsUrl.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {
        pnlResultsUrl.innerHTML = `<p>Your shortened url is: </p><p><a href="https://${res.shortUrl} "> ${res.shortUrl}</a> </p>`;
    }
    urlShortenResults.style.display = "block";
};

const showErrorPanelUrlShorten = () => {
    pnlResultsUrl.innerHTML = `
    <p>Try again!</p><p>Anything not work! Mudkip is trying to fix!</p>
    <img style="width: 150px;" src="./assets/img/fail-pokemon.gif">
    `
    urlShortenResults.style.display = "block";
}

const validateInputUrl = () => {
    let expression = "^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$";
    let urlRegEx = new RegExp(expression);



    if (inputUrlField.value && !/\s/.test(inputUrlField.value) && urlRegEx.test(inputUrlField.value)) {
        inputUrlField.classList.remove("no-valid");
        inputUrlField.classList.add("valid");
        btnUrlShorten.disabled = false;
    } else {
        inputUrlField.classList.add("no-valid");
        inputUrlField.classList.remove("valid");
        btnUrlShorten.disabled = true;
    }
}