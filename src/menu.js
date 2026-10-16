import menuImage1 from "./images/menu/new_in_the_club.png";
import menuImage2 from "./images/menu/burger.png";
import menuImage3 from "./images/menu/sides.png";
import menuImage4 from "./images/menu/fries.png";
import menuImage5 from "./images/menu/deserts_and_beverages.png";
import menuImage6 from "./images/menu/launch_offer.png";
import menuImage7 from "./images/menu/wraps.png";
import menuImage8 from "./images/menu/salads.png";
import "./menu.css";

const menuBackgroundImages = [
    menuImage2,
    menuImage1,
    menuImage7,
    menuImage7,
    menuImage2,
    menuImage5,
    menuImage3
]

const menuList = [
    {
        menuImage: menuImage1,
        menuText: "NEW IN THE CLUB"
    },
    {
        menuImage: menuImage2,
        menuText: "BURGER"
    },
    {
        menuImage: menuImage3,
        menuText: "SIDES"
    },
    {
        menuImage: menuImage4,
        menuText: "FRIES"
    },
    {
        menuImage: menuImage5,
        menuText: "DESERTS AND BEVERAGES"
    },
    {
        menuImage: menuImage6,
        menuText: "LAUNCH OFFER"
    },
    {
        menuImage: menuImage7,
        menuText: "WRAPS"
    },
    {
        menuImage: menuImage8,
        menuText: "SALADS"
    }
];

export function createMenuTab() {
    const contentContainer = document.getElementById("content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu")
    const menuText = document.createElement("h1");
    menuText.classList.add("menu-text")
    menuText.textContent = "MENU";

    const menuCardsContainer = document.createElement("div");
    menuCardsContainer.classList.add("menu-cards-container");

    for (let i = 0; i < menuList.length; i++) {
        const menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");
        const cardImage = document.createElement("img");
        cardImage.classList.add("card-image");
        cardImage.src = menuList[i].menuImage;
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = menuList[i].menuText;
        menuCard.appendChild(cardImage);
        menuCard.appendChild(cardText);
        menuCardsContainer.appendChild(menuCard);
    }

    for (let i = 0; i < menuBackgroundImages.length; i++) {
        const menuBackgroundImage = document.createElement("img");
        menuBackgroundImage.classList.add("menu-background-image");
        menuBackgroundImage.src = menuBackgroundImages[i];
        menuContainer.appendChild(menuBackgroundImage);
    }

    menuContainer.appendChild(menuText);
    menuContainer.appendChild(menuCardsContainer);

    while (contentContainer.hasChildNodes()) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
    
    contentContainer.appendChild(menuContainer);
}