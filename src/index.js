import "./styles.css";
import { homeContents } from "./homeContent.js";
import { menuContent } from "./menuContent.js";

homeContents();

const contentDiv = document.querySelector("#content");
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");

home.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  homeContents();
});

menu.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  menuContent();
});
