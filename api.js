async function FetchMovies(){
    try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json'
          }
        }

        const page = Math.floor(Math.random() * 10) + 1;
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`, options);
        if (!response.ok) {
            console.error('Fetch failed with status', response.status);
            return [];
        }
        const data = await response.json();

        const cardData = Array.isArray(data) ? data.map(picture => ({
            name: picture.author,
            posterPath: picture.download_url || picture.url
        })) : [];
        return cardData;
    } catch (error) {
        console.error(error);
        return [];
    }
}

function createCard(data) {
    return `
        <div class="card">
            <img src="${data.posterPath}">
            <h2>${data.name}</h2>
            <button>Read More</button>
        </div>
            `
}

let cardsData = [];

async function init() {
    const loading = document.getElementById('loading');
    const filmsContainer = document.getElementById('Films');

    cardsData = await FetchMovies();

    loading.style.display = 'none';

    if (cardsData.length > 0) {
        filmsContainer.innerHTML = cardsData.map(data => createCard(data)).join('');
    } else {
        filmsContainer.innerHTML = '<p>No movies found.</p>';
    }
}

init();