const reviewsCount = document.querySelector("#reviewCount");

let reviews = localStorage.getItem("reviews");

if (reviews !== 0){
    reviewsCount.textContent = `${reviews}`;
} else{
    reviewsCount.textContent = "1";
}

