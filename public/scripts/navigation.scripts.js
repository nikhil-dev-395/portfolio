// public/navigation.scripts.js
console.log("navigation.js");
let currentLocation = window.location.pathname;

const home = document.getElementById("home");
const about = document.getElementById("about");
const logo = document.getElementById("logo");




logo.addEventListener("click", () => {
  window.location.pathname = "/";
});
