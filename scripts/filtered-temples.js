const currentSelection = document.querySelector("#currentSelection");
const title = document.getElementsByTagName("title");

const displayMenu = document.querySelector("#displayMenu");
const menu = document.querySelector("#menu");

displayMenu.addEventListener("click", function () {
    menu.classList.toggle("show");
    if (displayMenu.textContent == "≡"){
        displayMenu.textContent = "x";
    } else if (displayMenu.textContent == "x") {
        displayMenu.textContent = "≡";
    };
});

const today = new Date();

const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");


const fullYear = today.getFullYear();

const lastModification = document.lastModified;

currentYear.textContent = fullYear;
lastModified.textContent = `Last Modification: ${lastModification}`;


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Porto Alegre Temple",
        location: "Porto Alegre, Brazil",
        dedicated: "2000, May, 2",
        area: 10700,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/porto-alegre-brazil/400x250/porto-alegre-brazil-temple-lds-83426-high-res-print.jpg"
    },
    {
        templeName: "Sao Paulo Brazil Temple",
        location: "Sao Paulo, Brazil",
        dedicated: "1978, November, 2",
        area: 59246,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-55945-thumb.jpg"
    },
    {
        templeName: "Rio de Janeiro Brazil Temple",
        location: "Rio de Janeiro, Brazil",
        dedicated: "2022, May, 8",
        area: 29966,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rio-de-janeiro-brazil/800x500/4-5aa85fb6f20a17f629302687710142328a707d4d.jpeg"
    }
];

const templesContainer = document.querySelector("#templesContainer");

function displayTempleCards(filteredTemples){
    templesContainer.innerHTML = "";
    filteredTemples.forEach(temple => {
        let figure = document.createElement("figure");
    
        let figcaption = document.createElement("figcaption");
    
        let name = document.createElement("h2")
        name.innerText = temple.templeName;
    
        let templeInfo = document.createElement("ul");
    
        let location = document.createElement("li");
        location.innerHTML = "<b>Location:</b> " + temple.location;
    
        let dedicated = document.createElement("li");
        dedicated.innerHTML = "<b>Dedicated:</b> " + temple.dedicated;
    
        let size = document.createElement("li");
        size.innerHTML = "<b>Size:</b> " + temple.area + " sq ft";
    
        let templeImg = document.createElement("img");
        templeImg.setAttribute("src", temple.imageUrl);
        templeImg.setAttribute("alt", temple.templeName);
        templeImg.setAttribute("loading", "lazy");
    
        templeInfo.appendChild(location);
        templeInfo.appendChild(dedicated);
        templeInfo.appendChild(size);
    
        figcaption.appendChild(name);
        figcaption.appendChild(templeInfo);
    
        figure.appendChild(figcaption);
        figure.appendChild(templeImg);
    
        templesContainer.appendChild(figure);
    });
};

displayTempleCards(temples);

const homeLink = document.querySelector("#homeLink");
const oldLink = document.querySelector("#oldLink");
const newLink = document.querySelector("#newLink");
const largeLink = document.querySelector("#largeLink");
const smallLink = document.querySelector("#smallLink");


homeLink.addEventListener("click", function () {
    currentSelection.textContent = homeLink.innerText;
    displayTempleCards(temples);
});

oldLink.addEventListener("click", function () {
    currentSelection.textContent = oldLink.innerText;
    let filteredTemples = temples.filter(temple => {
        dedicatedArray = temple.dedicated.split(",");
        
        return parseInt(dedicatedArray[0]) < 1900;
    });

    displayTempleCards(filteredTemples);
});

newLink.addEventListener("click", function () {
    currentSelection.textContent = newLink.innerText;
    let filteredTemples = temples.filter(temple => {
        dedicatedArray = temple.dedicated.split(",");
        
        return parseInt(dedicatedArray[0]) > 2000;
    });

    displayTempleCards(filteredTemples);
});

largeLink.addEventListener("click", function () {
    currentSelection.textContent = largeLink.innerText;
    let filteredTemples = temples.filter(temple => temple.area > 90000);

    displayTempleCards(filteredTemples);
});

smallLink.addEventListener("click", function () {
    currentSelection.textContent = smallLink.innerText;
    let filteredTemples = temples.filter(temple => temple.area < 10000);

    displayTempleCards(filteredTemples);
});