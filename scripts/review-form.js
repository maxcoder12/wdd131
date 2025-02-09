const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const productSelect = document.getElementById("products-list");

products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name.toUpperCase();
    productSelect.appendChild(option);
});


const form = document.querySelector(".wf1");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let reviews = JSON.parse(window.localStorage.getItem("reviews")) || 0;

form.addEventListener("submit", (e) => {
    let checked = false;
    
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checked = true;
        }
    });
    
    if (!checked) {
        e.preventDefault();
        alert("Please select at least one feature.");
    } else{
        reviews++;

        window.localStorage.setItem("reviews", reviews);
    }
});

const today = new Date();

const currentYear = document.querySelector("#currentYear")
const lastModified = document.querySelector("#lastModified")


const fullYear = today.getFullYear()

const lastModification = document.lastModified

currentYear.textContent = fullYear
lastModified.textContent = `Last Modification: ${lastModification}`

