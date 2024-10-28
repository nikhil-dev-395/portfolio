import { colors } from "./constants.scripts.js";
const mainbody = document.getElementById("main-body");
const lft_img = document.getElementById("lft-img");
const lft_img2 = document.getElementById("lft-img2");
const rightop1 = document.getElementById("rightop1");
const rightop12 = document.getElementById("rightop12");
const rightop22 = document.getElementById("rightop22");
const frontend_skills = document.getElementById("frontend-skills");
const backend_skills = document.getElementById("backend-skills");
const tools = document.getElementById("tools");

mainbody.style.background = colors.bgColor;
tools.style.background = colors.bgColor;
frontend_skills.style.background = colors.bgColor;
backend_skills.style.background = colors.bgColor;
rightop12.style.background = colors.bgColor;
rightop22.style.background = colors.bgColor;
rightop22.style.background = colors.bgColor;

mainbody.style.backgroundImage = "url('/icons/footer-grid.svg')";
// mainbody.style.backgroundSize = "cover";
// lft_img.style.backgroundRepeat = "no-repeat";
// mainbody.style.height = "100%";
// Set background image for lft_img
lft_img.style.backgroundImage = "url('/img/lptp.webp')";
lft_img.style.backgroundSize = "cover"; // or "contain"
lft_img.style.backgroundRepeat = "no-repeat"; // or "repeat"
lft_img.style.height = "100%"; // Ensure it takes full height of box1

// Set background image for lft_img
lft_img2.style.backgroundImage = "url('/img/lptp2.webp')";
lft_img2.style.backgroundSize = "cover"; // or "contain"
lft_img2.style.backgroundRepeat = "no-repeat"; // or "repeat"
lft_img2.style.height = "100%"; // Ensure it takes full height of box1

// Set background image for rightop1
rightop1.style.backgroundImage = "url('/img/earth.webp')";
rightop1.style.backgroundSize = "cover"; // or "contain"
rightop1.style.backgroundRepeat = "no-repeat"; // or "repeat"
rightop1.style.height = "100%"; // Ensure it takes full height of box1

// Copy email by clicking on button
const copy_email = document.getElementById("copy-email");
const email = copy_email.getAttribute("data-email");

copy_email.addEventListener("click", () => {
  const copy_text = email;
  navigator.clipboard
    .writeText(copy_text)
    .then(() => {
      copy_email.innerText = "email copied";
      copy_email.style.borderColor = "yellow";
      copy_email.style.color = "rgb(99 102 241)";
    })
    .catch((err) => {
      console.error("Failed to copy email: ", err);
      alert("Failed to copy email!");
    });
});
