import dogsData from "./data.js";
import { Dog, selectDog } from "./util.js";


let dogsArray = dogsData.slice()
let currentDog = selectDog(dogsArray)
let isWaiting = false

function render(currentDog) {

    document.getElementById("img-container").innerHTML = currentDog.getImageHtml()
}

function swipeDecision(decision) {
    if(!isWaiting) {
        isWaiting = true
        currentDog.hasBeenSwiped = true
        decision === "heart" && (currentDog.hasBeenLiked = true)
        render(currentDog)
        setTimeout(() => {
            currentDog = selectDog(dogsArray)
            dogsArray.length === 0 && (dogsArray = dogsData.slice())
            render(currentDog)
            isWaiting = false
        }, 1000)
    }
}

render(currentDog)

document.getElementById("btn-cross").addEventListener("click", () => swipeDecision("cross"))
document.getElementById("btn-heart").addEventListener("click", () => swipeDecision("heart"))