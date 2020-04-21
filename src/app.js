// Attrs
const container = document.querySelector("#content");
const routes = ["/", "/rhyme", "/url"];
const routeActions = ["lnkHome", "lnkRhyme", "lnkUrl"];

// Events
window.onload = () => {


}

// Routes Charge
const homeCharge = () => {

};

const rhymeCharge = () => {
    container.innerHTML = `
    <h1>Rhyme Generator</h1>
    <div class="card">
        <div class="card-header">
            Rhyme generate
        </div>
        <div class="card-body">
            <h5 class="card-title">We provided a generator that calculate a 10 words what rhymes</h5>
            <p class="card-text">Insert here the word that you want.</p>
            <input type="text" class="form-control" id="wordRhymeInput" placeholder="Word" >
            <button id="btnRhyme" disabled="" type="button" class="btn btn-outline-primary">Search!</button>
        </div>
    </div>

    <div class="card p-3 results" id="rhymeResults">
        <blockquote class="">
        <p>Results view:</p>
        <footer class="blockquote-footer text-right">
            <small class="text-muted">
            Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
        </footer>
        </blockquote>
    </div>
    `
    onLoadRhyme();
    activeOneLink("lnkRhyme");
}