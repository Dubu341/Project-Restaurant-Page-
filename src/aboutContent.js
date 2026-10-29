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
    "A small project to get hands-on experience with webpack's entry points, loaders, plugins, and dev server and managing dependencies with npm",
  );
  content.append(container);
  container.append(headText, paragraph);
}
export { aboutContent };
