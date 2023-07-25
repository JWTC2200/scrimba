
import baseColors from "./basecolors.js"
import { changeSample, renderColors } from "./util.js"

const button = document.getElementById("btn")
const colorGrid = document.querySelector(".color-grid")
const colorSample = document.getElementById("color-sample")
const modeSelector = document.getElementById("color-menu")

colorGrid.addEventListener("click", (event) => changeSample(event))

button.addEventListener("click", () => fetchColors(colorSample.style.backgroundColor, modeSelector.value))

function fetchColors(color, mode) {
    console.log(color, mode)
    fetch(`https://www.thecolorapi.com/scheme?rgb=${color}&mode=${mode}`)
    .then(res => res.json())
    .then(data => {
        const colorArray = data.colors.map(result => result.hex.value)
        renderColors(colorArray)
    }
    )
}

renderColors(baseColors)