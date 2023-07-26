import { updateRemainingCards, renderCards, compareCards, finalWinner } from "./util.js"

let deckId

const drawButton = document.getElementById("draw-cards")
drawButton.disabled = true

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            updateRemainingCards(data)
            deckId = data.deck_id
            drawButton.disabled = false
        })
}

document.getElementById("new-deck").addEventListener("click", handleClick)

drawButton.addEventListener("click", () => {   
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            updateRemainingCards(data)
            renderCards(data.cards)
            compareCards(data.cards)
            if (document.getElementById("cards-remaining").textContent === "0") {
                drawButton.disabled = true
                finalWinner()
            }   
        })
     
})



