import {createHomeTab} from "./home.js";
import {createMenuTab} from "./menu.js";
import {createAboutTab} from "./about.js";
import "./styles.css";

const contentContainer = document.getElementById("content");
const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button");

createHomeTab();

homeButton.addEventListener("click", () => {
    createHomeTab();
})

menuButton.addEventListener("click", () => {
    createMenuTab();
})

aboutButton.addEventListener("click", () => {
    createAboutTab();
})