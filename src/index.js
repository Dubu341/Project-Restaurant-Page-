import "./styles.css";
import { homeContents } from "./homeContent.js";
import { menuContent } from "./menuContent.js";
import { aboutContent } from "./aboutContent.js";
homeContents();

const contentDiv = document.querySelector("#content");
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");

home.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  homeContents();
});

menu.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  menuContent();
});

about.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  aboutContent();
});
