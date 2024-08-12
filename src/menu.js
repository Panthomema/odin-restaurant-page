import { createHtmlElement, greetingContent } from "./utils";
import data from "./menu-data.json";

export default function generateMenuContent() {
  const content = createHtmlElement("div");

  const firstParagraph = createHtmlElement(
    "p",
    "You can choose between our <strong>most popular</strong> creations:"
  );

  const plates = createHtmlElement("div");
  plates.setAttribute("id", "plates");

  // Create a card for each item in the menu
  const cards = data.map((item) => {
    const card = createHtmlElement("div");

    // Create an image container so the caption can be displayed on the image
    const imageContainer = createHtmlElement("div", "", "image-container");

    const image = createHtmlElement("img");
    // Dynamically import the image (lazy loading)
    import(`../assets/images/plates/${item.image.fileName}`).then(
      ({ default: src }) => (image.src = src)
    );
    image.alt = item.image.alt;

    const caption = createHtmlElement(
      "p",
      item.caption,
      "caption",
      "opacity-0" // Hide the caption by default
    );

    caption.addEventListener("click", () => {
      caption.classList.toggle("opacity-0");
    });

    imageContainer.append(image, caption);

    const name = createHtmlElement("p", item.name);

    card.append(imageContainer, name);

    return card;
  });

  plates.append(...cards);

  const lastParagraph = createHtmlElement(
    "p",
    "<strong>Or</strong> whatever that goes beyond your imagination..."
  );

  const greeting = createHtmlElement("p", greetingContent);

  content.append(firstParagraph, plates, lastParagraph, greeting);

  return content;
}
