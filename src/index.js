import "./styles/style.css";
import generateAboutContent from "./parts/about";
import generateMenuContent from "./parts/menu";
import generateContactContent from "./parts/contact";

const content = document.querySelector("#content");

const aboutContent = generateAboutContent();
const menuContent = generateMenuContent();
const contactContent = generateContactContent();

content.replaceChildren(aboutContent);

document.querySelector("#about-btn").addEventListener("click", (event) => {
  handleMenuClick(event, aboutContent);
});

document.querySelector("#menu-btn").addEventListener("click", (event) => {
  handleMenuClick(event, menuContent);
});

document.querySelector("#contact-btn").addEventListener("click", (event) => {
  handleMenuClick(event, contactContent);
});

function clearActualStyles() {
  [...document.querySelectorAll("button")].forEach((btn) => {
    btn.classList.remove("actual");
  });
}

function handleViewTransition(newContent) {
  if (! document.startViewTransition) {
    content.replaceChildren(newContent);
    return;
  }

  document.startViewTransition(() => {
    content.replaceChildren(newContent);
  });
}

function handleMenuClick(event, newContent) {
  clearActualStyles();
  event.currentTarget.classList.add("actual");
  handleViewTransition(newContent);
}
