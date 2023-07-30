const cryptoCoins = ["bitcoin", "ethereum", "dogecoin"]

function setBackground(bgLink) {
    document.body.style.backgroundImage = `url(${bgLink})`
}

function setArtistName(artist) {
    document.getElementById("artist").innerHTML = `
        By. ${artist}
    `
}

function renderCoinData(coinData) {
    document.getElementById("crypto-container").innerHTML += `
        <div class="coin-container">
            <img class="coin-icon" src=${coinData.image.large}>
            <h3>
                ${coinData.name} $${coinData.market_data.current_price.usd}
            </h3>                  
        </div> 
    `
}

function getCurrentTime() {
    const currentTime = new Date().toLocaleTimeString("en-GB", { timeStyle: "short", hourCycle: "h12"})
    document.getElementById("time").textContent = currentTime
}

export {
    cryptoCoins,
    setBackground,
    setArtistName,
    renderCoinData,
    getCurrentTime,
}