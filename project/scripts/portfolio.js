function displayProject(container){
    projects.forEach(project => {

        const div = document.createElement("div");
        const subDiv = document.createElement("div");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const about = document.createElement("p");
        const aboutText = project.description;
        const technologies = document.createElement("p");
        const technologiesText = project.technologies;        
        const a = document.createElement("a");

        div.classList.add("project");

        h3.textContent = project.name;

        a.setAttribute("href", project.url);
        a.setAttribute("target", "_blank");
        a.classList.add("button");
        a.textContent = "View on GitHub";

        img.setAttribute("src", project.image);
        img.setAttribute("laoding", "lazy")

        about.innerHTML = `<strong>About:</strong> ${aboutText}`;
        technologies.innerHTML = `<strong>Technologies:</strong> ${technologiesText}`;

        subDiv.classList.add("project-info");
        subDiv.appendChild(h3);
        subDiv.appendChild(about);
        subDiv.appendChild(technologies);
        subDiv.appendChild(a);
        
        div.append(img);
        div.append(subDiv);
        
        container.appendChild(div);
    });
}

const portfolio = document.querySelector("#projectsContainer");
displayProject(portfolio);