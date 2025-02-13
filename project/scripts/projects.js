const projects = [
    {
        name: "Rapids - Whitewater Rafting Website",
        url: "https://maxcoder12.github.io/wdd130/wwr/",
        image: "images/white-water-logo.png"
    },
    {
        name: "Poll-form",
        url: "https://maxcoder12.github.io/wdd130/week05/poll-form.html",
        image: "images/poll-form-image.png"
    },
    {
        name: "WDD 130 Menu",
        url: "https://maxcoder12.github.io/wdd130/",
        image: "images/wdd130-menu.png"
    },
    {
        name: "Temple Album",
        url: "https://maxcoder12.github.io/wdd131/filtered-temples.html",
        image: "images/temple-image.jpg"
    },
    {
        name: "Review Form",
        url: "https://maxcoder12.github.io/wdd131/form.html",
        image: "images/review-form.png"
    },
    {
        name: "Gramado Description",
        url: "https://maxcoder12.github.io/wdd131/place.html",
        image: "images/gramado-small.webp"
    }
]



function displayProject(){
    projects.forEach(project => {

        const carousel = document.querySelector("#carousel")

        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const a = document.createElement("a");
        const img = document.createElement("img");

        div.classList.add("carousel-item");

        h3.textContent = project.name;
        a.setAttribute("href", project.url);
        a.setAttribute("target", "_blank");
        img.setAttribute("src", project.image);

        a.appendChild(img);

        div.appendChild(h3);
        div.appendChild(a);

        carousel.appendChild(div);
    });
}

displayProject();


let itemsIndex = 0;

function moveSlide(step) {
    const items = document.querySelectorAll('.carousel-item');
    itemsIndex += step;

    if (itemsIndex == (items.length - 2)) {
        itemsIndex = 0;
    } else if (itemsIndex < 0) {
        itemsIndex = items.length - 1;
    }

    const position = -itemsIndex * 100;
    items.forEach(item =>{
        item.style.transform = `translateX(${position}%)`;
    });
}

function autoSlide() {
    setInterval(function() {
        moveSlide(1);
    }, 2000);
}

autoSlide();