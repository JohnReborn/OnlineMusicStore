// Get the dropdown menu and product list
const categoryFilter = document.getElementById('category-filter');
const productList = document.getElementById('product-list');
const productCards = document.querySelectorAll('.product-card');

// Event listener for when the user changes the category
categoryFilter.addEventListener('change', function () {
    const selectedCategory = categoryFilter.value;

    // Loop through all product cards and show/hide based on the selected category
    productCards.forEach(function (card) {
        const productCategory = card.getAttribute('data-category');

        if (selectedCategory === 'all' || productCategory === selectedCategory) {
            card.style.display = 'block'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
});