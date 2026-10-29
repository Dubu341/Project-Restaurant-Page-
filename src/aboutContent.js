function aboutContent() {
  const content = document.querySelector("#content");

  function createElement(tag, className, text) {
    let element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (text) element.textContent = text;
    return element;
  }
  const container = createElement("div", "aboutContainer", "");
  const headText = createElement("h2", "", "ABOUT");
  const paragraph = createElement(
    "span",
    "",
    "Figuring out how to render the menu page in js was pretty cool huh. Class constructors are cool huh.",
  );

  const pizzaImgSource = createElement(
    "a",
    "",
    "Tasty looking pizza image on Unsplash",
  );
  const pizzeriaImgsource = createElement(
    "a",
    "",
    "pizzeria image on Unsplash",
  );
  const links = createElement("div", "links", "");
  pizzaImgSource.href =
    "https://unsplash.com/photos/a-slice-of-pizza-with-melted-cheese-being-lifted-kpz1Y1tikGM";
  pizzeriaImgsource.href =
    "https://unsplash.com/photos/a-pizza-shop-is-lit-up-at-night-uoMd234p0Uk";
  pizzaImgSource.target = "_blank";
  pizzeriaImgsource.target = "_blank";

  content.append(container, links);
  links.append(pizzaImgSource, pizzeriaImgsource);
  container.append(headText, paragraph);
}
export { aboutContent };
