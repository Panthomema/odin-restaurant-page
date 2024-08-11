export default function about() {
  const about = document.createElement("div");
  about.setAttribute("id", "about-content");

  const firstRow = document.createElement("p");
  firstRow.innerHTML =
    "At <strong>Whatever</strong>, you can eat <strong>anything</strong>, " +
    "cause we have <strong>everything</strong>.";

  const lastRow = document.createElement("p");

  lastRow.textContent = "TY";

  about.append(firstRow, lastRow);

  return about;
}
