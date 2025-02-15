const form = document.querySelector("#contactForm");
let messages = JSON.parse(window.localStorage.getItem("messages")) || 0;

form.addEventListener("submit", ()=>{
    messages++;

    window.localStorage.setItem("messages", messages);
});