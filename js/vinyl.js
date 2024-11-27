const genreFilter = document.getElementById('genre-filter');
const viynlList = document.getElementById('viynl-list');
const viynlCards = document.querySelectorAll('.viynl-card');

// Event listener for when the user changes the genre
genreFilter.addEventListener('change', function () {
    const selectedGenre = genreFilter.value;

    // Loop through all viynl cards and show/hide based on the selected genre
    viynlCards.forEach(function (card) {
        const productGenre = card.getAttribute('data-genre');

        if (selectedGenre === 'all' || productGenre === selectedGenre) {
            card.style.display = 'block'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
});