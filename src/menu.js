import data from "./menu-data.json";

/*
let srcOut;
const image = import(`../assets/images/${data[0].image.slug}`);

image.then(({ default: src }) =>  { 
  srcOut = src 
});

console.log(srcOut);

const images = data.map((item) => import(item.image.src).then((image) => image));
console.log(images);
*/

export default function menu() {
  const content = document.createElement("div");

  const textNodeOpening = document.createElement("p");
  textNodeOpening.innerHTML =
    "You can choose between our <strong>most popular</strong> creations:";

  const plates = document.createElement("div");
  plates.setAttribute("id", "plates");

  const cards = data.map((item) => {
    const card = document.createElement("div");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const image = document.createElement("img");

    import(`../assets/images/plates/${item.image.fileName}`).then(
      ({ default: src }) => (image.src = src)
    );

    image.alt = item.image.alt;

    const caption = document.createElement("p");
    caption.classList.add("caption");
    caption.classList.add("opacity-0");
    caption.textContent = item.caption;

    caption.addEventListener("click", () => {
      caption.classList.toggle("opacity-0");
    });

    imageContainer.append(image, caption);

    const name = document.createElement("p");
    name.textContent = item.name;

    card.append(imageContainer, name);

    return card;
  });

  plates.append(...cards);

  const textNodeEnding = document.createElement("p");
  textNodeEnding.innerHTML =
    "Or <strong>whatever</strong> that goes beyond your imagination...";

  const greeting = document.createElement("p");
  greeting.textContent = "(◠‿◠)";

  content.append(textNodeOpening, plates, textNodeEnding, greeting);

  return content;
}
