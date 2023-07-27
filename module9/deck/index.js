import { updateRemainingCards, renderCards, compareCards, finalWinner } from "./util.js"

let deckId

const drawButton = document.getElementById("draw-cards")
drawButton.disabled = true

async function handleClick() {
    const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    const data = await response.json()
    updateRemainingCards(data)
    deckId = data.deck_id
    drawButton.disabled = false
}

async function drawCards() {
    const response = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    const data = await response.json()
    updateRemainingCards(data)
    renderCards(data.cards)
    compareCards(data.cards)
    if (document.getElementById("cards-remaining").textContent === "0") {
        drawButton.disabled = true
        finalWinner()
    }   
}

document.getElementById("new-deck").addEventListener("click", handleClick)
drawButton.addEventListener("click", drawCards)
