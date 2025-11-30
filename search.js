const searchInput = document.getElementById('Search');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();

    cards.forEach((card) => {
        const cardName = card.querySelector('h2').textContent.toLowerCase();
        
        if (cardName.includes(searchText)) {
            card.style.visibility = 'visible';
        } else {
            card.style.visibility = 'hidden';
        }
    });
});