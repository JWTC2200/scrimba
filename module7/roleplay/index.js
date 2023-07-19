import characterData from "./jsdata/characterData.js";
import Character  from "./jsdata/Character.js";
import { getDicePlaceholderHtml } from "./jsdata/utils.js";

function Attack() {
   wizard.getDiceHtml()
   orc.getDiceHtml()
   wizard.takeDamage(orc.currentDiceScore)
   orc.takeDamage(wizard.currentDiceScore)
   if(orc.dead || wizard.dead) {
      endGame()
   }
   render()
}

function endGame() {
   const endMessage = wizard.dead && orc.dead ?
      "No victors - all creatures are dead" : 
      wizard.dead ? "The Orc is Victorious" : "The Wizard Wins"
   const endEmoji = wizard.dead && orc.dead ? 
      "☠️☠️" : 
      wizard.dead ? "☠️" : "🔮"
   document.body.innerHTML = `
      <div class="end-game">
      <h2>Game Over</h2>
      <h3>${endMessage}</h3>
      <p class="end-emoji">${endEmoji}</p>
   </div>` 
}

function render() {
   document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml();
   document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
}

/*Does something here need to change?*/
const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()

document.getElementById("attack-button").addEventListener("click", Attack)
