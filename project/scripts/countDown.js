const timeText = document.querySelector("#timeDown");

let time = 3; 

timeText.textContent = time;

const countdown = setInterval(() => {
    time--; 

    timeText.textContent = time; 
    if (time <= 0) {
        clearInterval(countdown); 
        window.location.href = "index.html"; 
    }
}, 1000); 