const nav = document.querySelector("#sidenav");
const shortNav = document.querySelector("#shortNav");

const hideNav = () => {
    nav.style.display = "none";
    shortNav.style.display = "block";
}
const showNav = () => {
    nav.style.display = "block";
    shortNav.style.display = "none";
}