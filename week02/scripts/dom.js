document.title = "Maximosssss";

document.body.style.backgroundColor = "red";

const username = "Maximo Gomez";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? 'Guest' : username;

console.dir(document);