import "./styles.css";
import { contents } from "./homeContent.js";

contents();

const home = document.querySelector(".home");
const contentDiv = document.querySelector("#content");

home.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contents();
});
