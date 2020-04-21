// Attrs
const container = document.querySelector("#content");
const routes = ["/", "/rhyme", "/url"];
const routeActions = ["lnkHome", "lnkRhyme", "lnkUrl"];

// Events
window.onload = () => {
    homeCharge();

    $('.example-image')
        .wrap('<span style="display:inline-block"></span>')
        .css('display', 'block')
        .parent()
        .zoom({
            magnify: 0.6,
        });

}

// Routes Charge
const homeCharge = () => {
    container.innerHTML = `
    <h1>Welcome to random generator!</h1>
    <div class="pnlHome col-12">
        <p>We offer different types of generators that can help you in your day as rhymes for that song you never wrote or URL shorteners.</p>
        <p>Below are some quick examples of how the application works and what can be achieved with it.</p>
        <h2 class="my-3">Examples</h2>
        <div class="row my-3">
            <div class="col-12 col-md-6">
                <h5 class="my-2">Rhyme Generator</h5>
                <div>
                    <img src="/assets/img/rhyme-example.png" data-high-res-src="/assets//img/rhyme-example-big.png" onclick="expandImg(event)" class="example-image" alt="">
                </div>
            </div>
            <div class="col-12 col-md-12">
    
            </div>
        </div>
        <div id="footerHome" class="my-5">
            <p>We try to continuously improve, this is version 1.0.0 of our generator, any suggestion will be answered at inforagon@gmail.com</p>
            <p>Thanks for the use!</p>
        </div>
    </div>
    `
    activeOneLink("lnkHome");
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
            <input type="text" class="form-control" id="wordRhymeInput" placeholder="Word" >
            <button id="btnRhyme" disabled="" type="button" class="btn btn-outline-primary">Search!</button>
        </div>
    </div>

    <div class="card p-3 results" id="rhymeResults">
        <blockquote class="">
        <p>Results view:</p>
        <div id="pnlResultsRhyme" class="pnlResultsRhyme"></div>
        <footer class="blockquote-footer text-right">
            <small class="text-muted">
            Powered by <cite title="Source Title">DataMuse</cite>
            </small>
        </footer>
        </blockquote>
    </div>
    `
    onLoadRhyme();
    activeOneLink("lnkRhyme");
}