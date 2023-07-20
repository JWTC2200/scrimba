import characterData from "./jsdata/characterData.js";
import Character  from "./jsdata/Character.js";

let monstersArray = ["orc", "demon", "goblin"]
let isWaiting = false

function getNewMonster() {
   const nextMonsterData = characterData[monstersArray.shift()]
   return nextMonsterData ? new Character(nextMonsterData) : {}
}


function Attack() {
   if(!isWaiting){
       wizard.getDiceHtml()
       monster.getDiceHtml()
       wizard.takeDamage(monster.currentDiceScore)
       monster.takeDamage(wizard.currentDiceScore)
       render()
       
       if(wizard.dead){
           endGame()
       }
       else if(monster.dead){
           isWaiting = true
           if(monstersArray.length > 0){
               setTimeout(()=>{
                   monster = getNewMonster()
                   render()
                   isWaiting = false
               },1500)
           }
           else{
               endGame()
           }
       }    
   }

}

function endGame() {
   const endMessage = wizard.dead && monster.dead ?
      "No victors - all creatures are dead" : 
      wizard.dead ? `The monster is Victorious` : "The Wizard Wins"
   const endEmoji = wizard.dead && monster.dead ? 
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
   document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
   document.getElementById("monster").innerHTML = monster.getCharacterHtml();
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster()

render()

document.getElementById("attack-button").addEventListener("click", Attack)
