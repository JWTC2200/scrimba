const modalEl = document.getElementById("modal")
const modalInner = document.getElementById("modal-inner")
const modalCloseBtn = document.getElementById("modal-close-btn")
const modalForm = document.getElementById("modal-form")
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById("decline-btn")

setTimeout(function() {
    modalEl.style.display = "inline"
}, 1000)

modalCloseBtn.addEventListener('click', () => {
    modalEl.style.display = "none"
})

declineBtn.addEventListener("mouseover", () => {
    document.getElementById("modal-choice-btns").classList.toggle("reverse")
})

modalForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const modalFormData = new FormData(modalForm)
    const username = modalFormData.get("username")


    modalText.innerHTML = 
    `<div class="modal-inner-loading"><img src="images/loading.svg" class="loading"><p id="uploadText">Uploading your data to the dark web...</p></div>`
    
    setTimeout(() => {
        document.getElementById("uploadText").innerText = 
        "Making the sale..."
    }, 1500)
    
    setTimeout(() => {
        modalInner.innerHTML = 
        `<h2>Thanks <span class="modal-display-name">${username}</span> you sucker!</h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>`
        modalCloseBtn.disabled = false
    }, 3000)
})


