function getDiceRollArray(diceCount) {  
    return new Array(diceCount).fill(0).map(function(){
    return Math.floor(Math.random() * 6) + 1
    });   
 }

 function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(`<div class="placeholder-dice"></div>`).join("")
 }

 function getPercentage(current, maximum) {
   return 100 * current / maximum
 }

 export {
   getDiceRollArray, 
   getDicePlaceholderHtml,
   getPercentage,
}