const currentSelection = document.querySelector("#currentSelection");
const title = document.getElementsByTagName("title");

const homeLink = document.querySelector("#homeLink");
const oldLink = document.querySelector("#oldLink");
const newLink = document.querySelector("#newLink");
const largeLink = document.querySelector("#largeLink");
const smallLink = document.querySelector("#smallLink");


const displayMenu = document.querySelector("#displayMenu");
const menu = document.querySelector("#menu");

displayMenu.addEventListener("click", function () {
    menu.classList.toggle("show");
});

homeLink.addEventListener("click", function () {
    currentSelection.textContent = homeLink.innerText;
});

oldLink.addEventListener("click", function () {
    currentSelection.textContent = oldLink.innerText;
});

newLink.addEventListener("click", function () {
    currentSelection.textContent = newLink.innerText;
});

largeLink.addEventListener("click", function () {
    currentSelection.textContent = largeLink.innerText;
});

smallLink.addEventListener("click", function () {
    currentSelection.textContent = smallLink.innerText;
});


