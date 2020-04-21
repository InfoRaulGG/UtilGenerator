const nav = document.querySelector("#sidenav");
const shortNav = document.querySelector("#shortNav");
const loader = document.querySelector("#loader");

const hideNav = () => {
    shortNav.animate([
        { transform: 'translateX(-.1em)' },
        { transform: 'translateX(0)' }
    ], {
        duration: 500, // number in ms [this would be equiv of your speed].
        easing: 'ease-in-out',
        iterations: 1, // infinity or a number.'
    });
    nav.style.display = "none";
    shortNav.style.display = "block";
}

const showNav = () => {
    nav.animate([
        { transform: 'translateX(-.1em)' },
        { transform: 'translateX(0)' }
    ], {
        duration: 500, // number in ms [this would be equiv of your speed].
        easing: 'ease-in-out',
        iterations: 1, // infinity or a number.'
    });
    nav.style.display = "block";
    shortNav.style.display = "none";
}

const activeOneLink = lnk => {
    routeActions.forEach((i) => {
        let element = document.querySelector(`#${i}`);
        if (element) {
            lnk === i ? element.classList.add("active-link") : element.classList.remove("active-link");
        }
    });
};

const showLoader = () => {
    loader.style.display = "block";
}

const hideLoader = () => {
    loader.style.display = "none";
}

const expandImg = (e) => {
    const img = e.target.src;
    const highRes = $(e.target).data('high-res-img');
    const viewer = new FullScreenViewer();

    viewer.show(img);
}