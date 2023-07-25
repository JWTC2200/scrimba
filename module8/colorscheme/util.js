const colorSample = document.getElementById("color-sample")

function changeSample(event) {
    colorSample.style.backgroundColor = (event.target.style.backgroundColor
    )}

function renderColors(array) {
    for( let i = 0; i < array.length; i++) {
        document.getElementById(`col-${i+1}`).style.backgroundColor = array[i]
        document.getElementById(`code-${i+1}`).innerHTML = array[i]
    }
    colorSample.style.backgroundColor = array[0]
}

export {
    changeSample,
    renderColors
}