export function createHtmlElement(tag, innerHTML = "", ...classes) {
  const element = document.createElement(tag);
  element.innerHTML = innerHTML;
  element.classList.add(...classes);
  return element;
}

export const greetingContent = "(◠‿◠)";
