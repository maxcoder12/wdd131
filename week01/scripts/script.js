let count = 1;

const buttonA = document.querySelector("#button");
const paragraphA = document.querySelector("#paragraph");

buttonA.onclick = () => {
    buttonA.textContent = "Click Again!";
    paragraphA.textContent = `${count} click so far!`;
    count += 1;
};