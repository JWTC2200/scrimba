import {testSearch, testID} from "./data.js"
import { search, editWatchlist, renderMovies, mainEl } from "./util.js"

const form = document.getElementById("search-form")
const main = document.getElementById("main")

// set localstorage
if(!localStorage.getItem("movieWatchlist")) {
    localStorage.setItem("movieWatchlist", "[]")
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    search(document.getElementById("search-input").value)
})


mainEl.addEventListener("click", (event) => {
    if (event.target.className === "add-icon") {
        editWatchlist(event.target.parentElement.value)
        event.target.parentElement.parentElement.innerHTML = `
            <p class="watchlist">
                Added to watchlist
            </p>
        `
    }
})
