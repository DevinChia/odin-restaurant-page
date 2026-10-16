import homeBurgerImage from "./images/home/home-burger.png";
import "./home.css";

export function createHomeTab() {
    const contentContainer = document.getElementById("content");
    
    const homeContainer = document.createElement("div")
    homeContainer.classList.add("home");
    
    const homeTextContainer = document.createElement("div");
    homeTextContainer.classList.add("home-text-container");
    
    const homeTopText = document.createElement("p");
    homeTopText.classList.add("home-top-text");
    homeTopText.textContent = "THE ULTIMATE";
    const homeMainText = document.createElement("p");
    homeMainText.classList.add("home-main-text");
    homeMainText.textContent = "Burger Club";
    const homeBottomText = document.createElement("p");
    homeBottomText.classList.add("home-bottom-text");
    homeBottomText.textContent = "Savor the Flavor, Join the Club";
    
    const homeImageContainer = document.createElement("div");
    homeImageContainer.classList.add("home-image-container");
    const homeImage = document.createElement("img");
    homeImage.classList.add("home-image");
    homeImage.src = homeBurgerImage;
    
    homeTextContainer.appendChild(homeTopText);
    homeTextContainer.appendChild(homeMainText);
    homeTextContainer.appendChild(homeBottomText);
    
    homeImageContainer.appendChild(homeImage);
    
    homeContainer.appendChild(homeTextContainer);
    homeContainer.appendChild(homeImageContainer);
    
    while (contentContainer.hasChildNodes()) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
    
    contentContainer.appendChild(homeContainer);
}
