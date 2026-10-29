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
  content.append(container);
  container.append(headText, paragraph);
}
export { aboutContent };
