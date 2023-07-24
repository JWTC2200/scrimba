
const button = document.getElementById("get-btn")
const display = document.getElementById("display")

button.addEventListener("click", boredApi)


function boredApi() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            display.innerHTML = `${data.activity}`
            
        })
}