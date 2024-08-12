import phoneIcon from '../assets/icons/phone.svg';

export default function contact() {
  const content = document.createElement("div");
  const image = document.createElement("img");
  image.src = phoneIcon;
  content.append(image);

  return content;
}
