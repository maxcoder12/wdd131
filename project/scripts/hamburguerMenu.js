const hamburguerIcon = document.querySelector("#hamburguerIcon");
const quitButton = document.querySelector("#quitMenu");
const menu = document.querySelector("#menu");

hamburguerIcon.addEventListener("click", () =>{
    menu.style.display = "flex"; 
    quitButton.style.display = "block"; 
    setTimeout(()=>{
        menu.style.right = "0"; 
        quitButton.style.right = ".3em";
    }, 100) 
});

quitButton.addEventListener("click", () => {
    menu.style.right = "-100%"; 
    quitButton.style.right = "-100%"; 

    setTimeout(()=> {
        menu.style.display = "none"; 
        quitButton.style.display = "none"; 
    }, 1000)
});