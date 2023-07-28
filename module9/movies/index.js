import {testSearch, testID} from "./data.js"
import { search} from "./util.js"

const form = document.getElementById("search-form")
const main = document.getElementById("main")

// set localstorage
if(!localStorage.getItem("movieWatchlist")) {
    localStorage.setItem("movieWatchlist", "[]")
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    // search(document.getElementById("search-input").value)
    // RE ENABLE LATER AFTER TESTING
    console.log("TESTING DISABLED")
})


main.addEventListener("click", (event) => {
    if (event.target.className === "add-icon") {
        addWatchlist(event.target.parentElement.value)
    }
})

function addWatchlist(id) {
    const getLocal = localStorage.getItem("movieWatchlist")
    const localArray = JSON.parse(getLocal)
    if(!localArray.includes(id)) {
        localArray.push(id)
        localStorage.setItem("movieWatchlist", JSON.stringify(localArray))
    }
}