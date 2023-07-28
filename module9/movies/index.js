import {testSearch, testID} from "./data.js"

const form = document.getElementById("search-form")
const mainEl = document.getElementById("main")

async function search(term) {
    // const res = await fetch(`http://www.omdbapi.com/?s=${term}&apikey=f3878b8c`)
    // const data = await res.json()
    // console.log(data.Response)
    // if (data.Response === "True") {
    //     renderMovies(data)
    // }
    renderMovies(testSearch.Search.slice(0, 5))
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    search(document.getElementById("search-input").value)
})


function renderMovies(movieArray) {
    console.log(movieArray)
    mainEl.innerHTML = ""
    movieArray.forEach(movie => {
        getMovie(movie.imdbID)
    })
}

async function getMovie(movieID) {
    const response = await fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=f3878b8c`)
    const data = await response.json()
    mainEl.innerHTML += movieHTML(data)
}

function movieHTML(data) {
    console.log(data)
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
                    <p class="watchlist"><img src="./images/plus.png" class="add-button">watchlist</p>
                </div>
                <p class="movie-plot">
                    ${data.Plot}
                </p>
            </div>
        </div>
    `
}