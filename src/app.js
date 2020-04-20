const container = document.querySelector("#content");

// Events
window.onhashchange = () => {
    console.log(window.location);
}


const rhymeCharge = (e) => {
    e.preventDefault();
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
            <button type="button" class="btn btn-outline-primary" onclick="rhymeCalculate();">Search!</button>
        </div>
    </div>

    <div class="card p-3 text-right results" id="rhymeResults">
        <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
            <small class="text-muted">
            Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
        </footer>
        </blockquote>
    </div>
`
}

const rhymeCalculate = () => {
    const rhymeResults = document.querySelector("#rhymeResults");
    rhymeResults.style.display = "block";
}