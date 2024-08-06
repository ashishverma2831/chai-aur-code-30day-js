// const t='avengers';
const api = '4b9b8055'
// http://www.omdbapi.com/?i=tt3896198&apikey=4b9b8055

const fetchMovieData = async (movie) => {
    await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${api}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayMovieData(data);
    })
    .catch(error => {
        console.log(error);
    })
}

const searchbutton = document.getElementById('search');
searchbutton.addEventListener('click', ()=>{
    const movieName = document.getElementById('input').value.toLowerCase();
    fetchMovieData(movieName);
});

const displayMovieData = (data) => {
    const movieInfo = document.getElementById('movie-info');
    movieInfo.innerHTML = `
        <h2>${data.Title}</h2>
        <img src="${data.Poster}" alt="${data.Title}">
        <p>Released: ${data.Released}</p>
    `
    const button = document.createElement('button');
    button.innerHTML = 'Show More';
    button.id = 'show-more-btn';
    movieInfo.appendChild(button);
    button.addEventListener('click', () => {
        movieInfo.innerHTML = `
            <h2>${data.Title}</h2>
            <img src="${data.Poster}" alt="${data.Title}">
            <p>Released: ${data.Released}</p>
            <p>Genre: ${data.Genre}</p>
            <p>Director: ${data.Director}</p>
            <p>Actors: ${data.Actors}</p>
            <p>IMDB Rating: ${data.imdbRating}</p>
            <p>Plot: ${data.Plot}</p>
        `
    })

}

// showMoreInfo = document.getElementById('show-more-btn');
// fetchMovieData();