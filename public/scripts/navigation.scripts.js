// public/navigation.scripts.js
console.log("navigation.js");
let currentLocation = window.location.pathname;

const home = document.getElementById("home");
const about = document.getElementById("about");
const logo = document.getElementById("logo");

if (currentLocation == "/about") {
  about.style.backgroundColor = "yellow";
}
if (currentLocation == "/") {
  home.style.backgroundColor = "yellow";
}

logo.addEventListener("click", () => {
  window.location.pathname = "/";
});
