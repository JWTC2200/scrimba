import { getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js"

export default class Character {
    constructor(data) {
        Object.assign(this, data)
        this.maxHealth = this.health
        this.diceArray = getDicePlaceholderHtml(this.diceCount)

    } 

    getDiceHtml() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(num => 
            `<div class="dice">${num}</div>`
            ).join("")
    }
    
    takeDamage(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, current) =>
            total + current)
        this.health -= totalAttackScore
        if(this.health <= 0){
            this.health = 0
            this.dead = true
        }
    }

    getHealthBarHtml() {
        const percent = getPercentage(this.health, this.maxHealth)
        return `<div class="health-bar-outer">
            <div class="health-bar-inner ${percent <= 25 ? "danger" : ""} " 
                style="width: ${percent}%;">
            </div>
        </div>`
    }

    getCharacterHtml() {
        const { elementId, name, avatar, health, diceCount, diceArray } = this; 
        const healthBar = this.getHealthBarHtml()     
        
        return `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            ${healthBar}
            <div class="dice-container">
                ${diceArray}
            </div>
        </div>`;
    }

 }