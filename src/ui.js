const nav = document.querySelector("#sidenav");
const shortNav = document.querySelector("#shortNav");


const hideNav = () => {
    shortNav.animate([
        { transform: 'translateX(-.5em)' },
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
        { transform: 'translateX(-.5em)' },
        { transform: 'translateX(0)' }
    ], {
        duration: 500, // number in ms [this would be equiv of your speed].
        easing: 'ease-in-out',
        iterations: 1, // infinity or a number.'
    });
    nav.style.display = "block";
    shortNav.style.display = "none";
}