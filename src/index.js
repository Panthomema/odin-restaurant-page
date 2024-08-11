import "./style.css";
import about from "./about";
import menu from "./menu";
import contact from "./contact";

const content = document.querySelector("#content");

const aboutContent = about();
const menuContent = menu();
const contactContent = contact();

content.replaceChildren(aboutContent);

document.querySelector("#about").addEventListener("click", (event) => {
  clearActualStyles();
  event.currentTarget.classList.add("actual");

  // add ViewTransitions fallback

  document.startViewTransition(() => {
    content.replaceChildren(aboutContent);
  });
});

document.querySelector("#menu").addEventListener("click", (event) => {
  clearActualStyles();
  event.currentTarget.classList.add("actual");

  // add ViewTransitions fallback

  document.startViewTransition(() => {
    content.replaceChildren(menuContent);
  });
});

document.querySelector("#contact").addEventListener("click", (event) => {
  clearActualStyles();
  event.currentTarget.classList.add("actual");

  // add ViewTransitions fallback

  document.startViewTransition(() => {
    content.replaceChildren(contactContent);
  });
});

function clearActualStyles() {
  [...document.querySelectorAll("button")].forEach((btn) => {
    btn.classList.remove("actual");
  });
}
