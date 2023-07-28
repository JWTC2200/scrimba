const mainEl = document.getElementById("main")

async function search(term) {
    const res = await fetch(`http://www.omdbapi.com/?s=${term}&apikey=f3878b8c`)
    const data = await res.json()
    const idArray = data.Search.slice(0, 5).map(movie => movie.imdbID)
    renderMovies(idArray)
}

async function renderMovies(idArray) {
    mainEl.innerHTML = ""
    if (!idArray.length) {
        if (window.location.toString().includes("index")) {
            mainEl.innerHTML = `
                <div class="empty-page">
                    START EXPLORING
                </div>
            `
        } else {
            mainEl.innerHTML = `
                <div class="empty-page">
                    <p>Your watchlist is looking a little empty</p>
                    <a href="./index.html"><img src="./images/plus.png" class="add-icon">Lets add some movies</a>
                </div>
        `
        }       
    } else {
        idArray.forEach(movieID => {
            getMovie(movieID)
        })
    }
    
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
                    <img src="./images/minus.png" class="add-icon">
                </button> 
                Remove
            </p>
        `
    if(window.location.toString().includes("index")) {
        if( JSON.parse(localStorage.getItem("movieWatchlist")).includes(data.imdbID) ) {
            watchListButton = `
                <p class="watchlist">
                    Already added
                </p>
            `
        } else {
            watchListButton = `
                <p class="watchlist">
                    <button class="add-button" value=${data.imdbID}>
                        <img src="./images/plus.png" class="add-icon">
                    </button> 
                    watchlist
                </p>
            `
        }
    }

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

function editWatchlist(id) {
    const getLocal = localStorage.getItem("movieWatchlist")
    const localArray = JSON.parse(getLocal)
    if(!localArray.includes(id)) {
        localArray.push(id)
        localStorage.setItem("movieWatchlist", JSON.stringify(localArray))
    } else {
        const removedArray = localArray.filter(movie =>
            movie !== id
        )
        localStorage.setItem("movieWatchlist", JSON.stringify(removedArray))
    }
}

export {
    search,
    renderMovies,
    editWatchlist,
}


{/* <p class="watchlist"><img src="./images/plus.png" class="add-button">watchlist</p> */}