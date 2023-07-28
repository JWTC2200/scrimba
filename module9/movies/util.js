const mainEl = document.getElementById("main")

async function search(term) {
    const res = await fetch(`http://www.omdbapi.com/?s=${term}&apikey=f3878b8c`)
    const data = await res.json()
    const idArray = data.Search.slice(0, 5).map(movie => movie.imdbID)
    renderMovies(idArray)
    // renderMovies(data.Search.slice(0, 5))
}

function renderMovies(idArray) {
    console.log(idArray)
    mainEl.innerHTML = ""
    idArray.forEach(movie => {
        getMovie(movie)
    })
}

async function getMovie(movieID) {
    const response = await fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=f3878b8c`)
    const data = await response.json()
    mainEl.innerHTML += movieHTML(data)
}

function movieHTML(data) {
    let watchListButton = `
        <p class="watchlist">
            <button class="add-button" value=${data.imdbID}>
                <img src="./images/plus.png" class="add-icon">
            </button> 
            watchlist
        </p>
    `
    return `
        <div class="movie-container">
            <img src=${data.Poster} class="movie-poster">
            <div class="movie-details">
                <div class="movie-title">
                    <h3>${data.Title}</h3>
                    <p>⭐ ${data.imdbRating}</p>
                </div>
                <div class="movie-info">
                    <p>${data.Runtime}</p>
                    <p>${data.Genre}</p>
                    ${watchListButton}
                </div>
                <p class="movie-plot">
                    ${data.Plot}
                </p>
            </div>
        </div>
    `
}


export {
    search,
    renderMovies
}


{/* <p class="watchlist"><img src="./images/plus.png" class="add-button">watchlist</p> */}