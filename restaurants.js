const searchInput = document.querySelector(".search-bar input");
const filterSelect = document.querySelector(".search-bar select");
const cards = document.querySelectorAll(".restaurant-card");
const noResults = document.querySelector(".no-results");

function filterRestaurants() {
  const searchValue = searchInput.value.toLowerCase();
  const filterValue = filterSelect.value.toLowerCase();

  cards.forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    const tags = card.querySelector(".tags").textContent.toLowerCase();

    const matchesSearch = name.includes(searchValue);
    const matchesFilter =
      filterValue === "all" || tags.includes(filterValue);

    card.style.display = (matchesSearch && matchesFilter)
      ? "block"
      : "none";
  });

  const visibleCards = Array.from(cards).some(
    card => card.style.display !== "none"
  );

  noResults.style.display = visibleCards ? "none" : "block";
}

searchInput.addEventListener("input", filterRestaurants);
filterSelect.addEventListener("change", filterRestaurants);
