import { catsData } from "./catsData.js"

const emotionRadiosEl = document.getElementById("emotion-radios")
const animatedGIFCheck = document.getElementById("gifs-only-option")
const getImageEl = document.getElementById("get-image-btn")
const memeModal = document.getElementById("meme-modal")
const memeModalInner = document.getElementById("meme-modal-inner")
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn")


emotionRadiosEl.addEventListener("change", highlightCheckedOption)
getImageEl.addEventListener("click", renderCat)
memeModalCloseBtn.addEventListener("click", closeMemeModal)


function renderCat() {
    memeModalInner.innerHTML = 
    `<img class="cat-img" src="images/${getSingleCat().image}">`
    memeModal.style.display = "flex"
}

function getSingleCat() {
    const matchingCats = getMatchingCatsArray()
    if(matchingCats.length === 1 ) {
        return matchingCats[0]
    } else {
        return matchingCats[Math.floor(Math.random() * matchingCats.length)]
    }
}

function getMatchingCatsArray() {
    if (document.querySelector("input[type=radio]:checked")) {
        const checkedRadioValue = document.querySelector("input[type=radio]:checked").value
        const animatedGIF = animatedGIFCheck.checked

        let matchingCats = catsData.filter(cat => 
            cat.emotionTags.includes(checkedRadioValue))
        if(animatedGIF ){
            matchingCats = matchingCats.filter(cat =>
                cat.isGif === true)
        }
        return matchingCats
    }
}

function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats)
    let radioElements = ""
    emotions.forEach(emotion => 
        radioElements += 
        `<div class="radio">
            <label for=${emotion}>${emotion}</label>
            <input 
                type="radio"
                id=${emotion}
                value=${emotion}
                name="emotions"
            >
        </div>`
    )
    emotionRadiosEl.innerHTML = radioElements
}

function getEmotionsArray(cats) {
    const allEmotions = []
    cats.forEach((cat) => 
        cat.emotionTags.forEach((emo) => 
            allEmotions.push(emo)
        )
    )
    return new Set(allEmotions)
}

function highlightCheckedOption(event) {
    const radiosList = document.getElementsByClassName("radio")

    for(let radio of radiosList) {
        radio.classList.remove("highlight")
    }
    document.getElementById(event.target.id).parentElement.classList.add("highlight")
}







function closeMemeModal() {
    memeModal.style.display = "none"
}

renderEmotionsRadios(catsData)
