import phoneIcon from "../assets/icons/phone.svg";
import addressIcon from "../assets/icons/address.svg";
import mailIcon from "../assets/icons/mail.svg";
import image from "../assets/images/location.png";

export default function contact() {
  const content = document.createElement("div");

  const phoneText = document.createElement("p");
  phoneText.classList.add("icon-text");
  phoneText.innerHTML = phoneIcon + "Infinity (TON) 618-0000";

  const mailText = document.createElement("p");
  mailText.classList.add("icon-text");
  mailText.innerHTML = mailIcon + "contact@whatever.com";

  const addressText = document.createElement("p");
  addressText.classList.add("icon-text");
  addressText.innerHTML =
    addressIcon + "Event Horizon Plaza, TON-618, Core Sector";

  const imgElement = document.createElement("img");
  imgElement.src = image;
  imgElement.alt =
    "Artistic depiction of the quasar TON-618 with a massive black hole, " +
    "bright light emissions, and cosmic surroundings";

  const lastParagraph = document.createElement("p");

  lastParagraph.innerHTML =
    "Located at the <strong>singularity</strong> — please account for time " +
    "dilation and gravitational lensing during your visit";

  const greeting = document.createElement("p");
  greeting.textContent = "(◠‿◠)";

  content.append(
    phoneText,
    mailText,
    addressText,
    imgElement,
    lastParagraph,
    greeting
  );

  return content;
}
