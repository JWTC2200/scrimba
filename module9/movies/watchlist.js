import { editWatchlist, renderMovies, mainEl } from "./util.js"

renderMovies(JSON.parse(localStorage.getItem("movieWatchlist")))

mainEl.addEventListener("click", (event) => {
    if (event.target.className === "add-icon") {
        editWatchlist(event.target.parentElement.value)
        renderMovies(JSON.parse(localStorage.getItem("movieWatchlist")))
    }
})
