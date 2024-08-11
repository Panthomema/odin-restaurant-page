import image from "../assets/images/about.png";

export default function about() {
  const content = document.createElement("div");

  const firstRow = document.createElement("p");
  firstRow.innerHTML =
    "At <strong>Whatever</strong>, you can eat <strong>anything</strong>, " +
    "cause we have <strong>everything</strong>.";
  
  const imgElement = document.createElement("img");
  imgElement.src = image;
  imgElement.alt = 
    "A surreal restaurant with a mix of futuristic and organic design " +
    "elements, featuring multiple culinary stations, floating tables, dynamic" +
    " lighting, and imaginative dishes like glowing desserts and " +
    "color-based soups."

  const secondRow = document.createElement("p");

  secondRow.innerHTML = 
    "<strong>Important!</strong> If you ask for <strong>something</strong> " + 
    "we can't serve, your meal is on the house!";
  
  const greeting = document.createElement("p");
  greeting.textContent = "(◠‿◠)";

  content.append(firstRow, imgElement, secondRow, greeting);

  return content;
}
