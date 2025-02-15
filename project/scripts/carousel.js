function displayProject(container){
    projects.forEach(project => {

        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const a = document.createElement("a");
        const img = document.createElement("img");

        div.classList.add("carousel-item");

        h3.textContent = project.name;
        a.setAttribute("href", project.url);
        a.setAttribute("target", "_blank");
        img.setAttribute("src", project.image);
        img.setAttribute("laoding", "lazy")

        a.appendChild(img);

        div.appendChild(h3);
        div.appendChild(a);

        container.appendChild(div);
    });
}

const carousel = document.querySelector("#carousel");
displayProject(carousel);


let itemsIndex = 0;

function moveSlide(step) {
    const items = document.querySelectorAll('.carousel-item');
    itemsIndex += step;

    if (itemsIndex == (items.length - 1)) {
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