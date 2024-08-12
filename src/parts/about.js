import { createHtmlElement, greetingContent } from "../utils";
import image from "../../assets/images/about.png";

export default function generateAboutContent() {
  const content = createHtmlElement("div");

  const firstParagraph = createHtmlElement(
    "p",
    `At <strong>Whatever</strong>, you can eat <strong>anything</strong>,
    cause we have <strong>everything</strong>`
  );
    
  const imgElement = createHtmlElement("img");
  imgElement.src = image;
  imgElement.alt =
    `A surreal restaurant with a mix of futuristic and organic design elements, 
    featuring multiple culinary stations, floating tables, dynamic lighting, 
    and imaginative dishes like glowing desserts and 
    color-based soups`;

  const secondParagraph = createHtmlElement(
    "p",
    `Step into a world where culinary limits disappear and imagination thrives 
    - At <strong>Whatever</strong>, each dish is a journey—whether classic or 
    cosmic. Our chefs craft extraordinary meals that delight and inspire - 
    We invite you to experience the <strong>extraordinary</strong>`
  );
  
  const lastParagraph = createHtmlElement(
    "p",
    `<strong>Important!</strong> If you ask for <strong>something</strong> we 
    can't serve, your meal is on the house!`
  );

  const greeting = createHtmlElement("p", greetingContent);
 
  content.append(
    firstParagraph,
    imgElement,
    secondParagraph,
    lastParagraph,
    greeting
  );

  return content;
}
