const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");
const restaurants = document.querySelectorAll(".restaurant-card");

searchButton.addEventListener("click", function() {

    const searchText = searchInput.value.toLowerCase().trim();
    let found = false;
    restaurants.forEach(function(restaurant) {

        const restaurantName = restaurant.querySelector("h3").textContent.toLowerCase();
        const category = restaurant.querySelector(".category").textContent.toLowerCase();
        const location = restaurant.querySelector(".location").textContent.toLowerCase();

        if (
            restaurantName.includes(searchText) ||
            category.includes(searchText) ||
            location.includes(searchText)
        ) {
            restaurant.style.display = "block";
            found = true;
        } else {
            restaurant.style.display = "none";
        }

    });
    const noResults = document.querySelector("#no-results");

if (found) {
    noResults.style.display = "none";
} else {
    noResults.style.display = "block";
}
});

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchButton.click();
    }

});

const clearButton = document.querySelector("#clear-search");

clearButton.addEventListener("click", function() {

    searchInput.value = "";

    restaurants.forEach(function(restaurant) {
        restaurant.style.display = "block";
    });

    document.querySelector("#no-results").style.display = "none";

});