import "./about.css";

export function createAboutTab(){
    const contentContainer = document.getElementById("content");
    
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about")
    const aboutText = document.createElement("h1");
    aboutText.classList.add("about-text");
    aboutText.textContent = "ABOUT US";
    
    aboutContainer.appendChild(aboutText);
    
    for (let i = 0; i < 2; i++) {
        const aboutUs = document.createElement("p")
        aboutUs.classList.add("about-us")
        aboutUs.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil sit praesentium libero tempore ab voluptas obcaecati reprehenderit debitis fugit facere molestiae nemo nostrum officiis, quia impedit fuga quisquam aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil sit praesentium libero tempore ab voluptas obcaecati reprehenderit debitis fugit facere molestiae nemo nostrum officiis, quia impedit fuga quisquam aliquid.";
        aboutContainer.appendChild(aboutUs);
    }
    
    while (contentContainer.hasChildNodes()) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
    
    contentContainer.appendChild(aboutContainer);
}