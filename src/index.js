import "./style.css";
import about from "./about";
import menu from "./menu";
import contact from "./contact";

const content = document.querySelector("#content");
content.replaceChildren(about());

document.querySelector("#about").addEventListener("click", (event) => {
  clearActualStyles();
  event.currentTarget.classList.add("actual");

  // add ViewTransitions fallback

  document.startViewTransition(() => {
    content.replaceChildren(about());
  });
});

document.querySelector("#menu").addEventListener("click", (event) => {
  clearActualStyles();
  event.currentTarget.classList.add("actual");

  // add ViewTransitions fallback

  document.startViewTransition(() => {
    content.replaceChildren(menu());
  });
});

document.querySelector("#contact").addEventListener("click", (event) => {
  clearActualStyles();
  event.currentTarget.classList.add("actual");

  // add ViewTransitions fallback

  document.startViewTransition(() => {
    content.replaceChildren(contact());
  });
});

function clearActualStyles() {
  [...document.querySelectorAll("button")].forEach((btn) => {
    btn.classList.remove("actual");
  });
}
