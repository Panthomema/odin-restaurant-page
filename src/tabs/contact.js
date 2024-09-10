import addressIcon from '../assets/icons/address.svg';
import mailIcon from '../assets/icons/mail.svg';
import phoneIcon from '../assets/icons/phone.svg';
import image from '../assets/images/location.png';
import { createHtmlElement, greetingContent } from '../utils';

export default function contact() {
  const content = createHtmlElement('div');

  const phoneText = createHtmlElement(
    'p',
    `${phoneIcon} Infinity (TON) 618-0000`,
    'icon-text',
  );

  const mailText = createHtmlElement(
    'p',
    `${mailIcon} contact@whatever.com`,
    'icon-text',
  );

  const addressText = createHtmlElement(
    'p',
    `${addressIcon} Event Horizon Plaza, TON-618, Core Sector`,
    'icon-text',
  );

  const imgElement = document.createElement('img');
  imgElement.src = image;
  imgElement.alt = `Artistic depiction of the quasar TON-618 with a massive black hole, bright 
    light emissions, and cosmic surroundings`;

  const paragraph = createHtmlElement(
    'p',
    `Located at the <strong>singularity</strong> — please account for time 
    dilation and gravitational lensing during your visit`,
  );

  const greeting = createHtmlElement('p', greetingContent);

  content.append(
    phoneText,
    mailText,
    addressText,
    imgElement,
    paragraph,
    greeting,
  );

  return content;
}
