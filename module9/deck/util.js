import {cardScores, cardSuits } from "./cardvalues.js"

let pcScore = 0
let playerScore = 0

function updateRemainingCards(deckData) {
    document.getElementById("cards-remaining").textContent = deckData.remaining
}

function renderCards(cardsArray) {
    document.getElementById("card1").style.backgroundImage = `url(${cardsArray[0].image})`
    document.getElementById("card2").style.backgroundImage = `url(${cardsArray[1].image})`
 }

function compareCards(cardsArray) {
    const card1 = cardsArray[0].value
    const card2 = cardsArray[1].value

    if (cardScores.indexOf(card1) === cardScores.indexOf(card2)) {
        if (cardSuits.indexOf(cardsArray[0].suit) > cardSuits.indexOf(cardsArray[1].suit)) {
            showWinner(`PC wins tie`)
            pcScore += 1
        } else {
            showWinner(`Player wins tie`)
                playerScore += 1
    }
    } else if (cardScores.indexOf(card1) > cardScores.indexOf(card2)) {
        showWinner("PC wins")
        pcScore += 1
    } else {
        showWinner("Player wins")
        playerScore += 1
    }
    updateScores()
}

function updateScores() {
    document.getElementById("pc-score").textContent = pcScore
    document.getElementById("player-score").textContent = playerScore
}

function showWinner(result) {
    document.getElementById("result-title").textContent = result
}

function finalWinner() {
    pcScore === playerScore ? showWinner("GAME IS A DRAW") :
        pcScore > playerScore ? showWinner("PC WINS IT ALL") : showWinner("PLAYER WINS IT ALL")
}


export {
    updateRemainingCards,
    renderCards,
    compareCards,
    finalWinner,
}