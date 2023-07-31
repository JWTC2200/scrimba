const cryptoCoins = ["bitcoin", "ethereum", "dogecoin"]

function setBackground(bgLink) {
    document.body.style.backgroundImage = `url(${bgLink})`
}

function setArtistName(artist) {
    document.getElementById("artist").innerHTML = `
        Background by. ${artist}
    `
}

function renderCoinData(coinData) {
    document.getElementById("crypto-container").innerHTML += `
        <div class="coin-container">
            <img class="coin-icon" src=${coinData.image.large}>
            <h3>
                ${coinData.name}: $<span id=${coinData.name}>${coinData.market_data.current_price.usd}</span>
            </h3>                  
        </div> 
    `
}

function updateCoinPrice() {
    cryptoCoins.forEach(coin => {
        fetch(`https://api.coingecko.com/api/v3/coins/${coin}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById(`${data.name}`).innerHTML = data.market_data.current_price.usd
        })
        
    });
}

function getCurrentTime() {
    const currentTime = new Date().toLocaleTimeString("en-GB", { timeStyle: "short", hourCycle: "h12"})
    document.getElementById("time").textContent = currentTime
}

function getWeatherData() {
    navigator.geolocation.getCurrentPosition((pos) => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=39aa0b9aaff5478291882924233107&q=${pos.coords.latitude},${pos.coords.longitude}`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            renderWeatherData(data)
        })
        .catch(err => console.error(err))
    }    
)}

function renderWeatherData(data) {
    document.querySelector(".weather-container").innerHTML = `
        <h2><img class="weather-icon" src=${data.current.condition.icon}>${data.current.temp_c}.C </h2>
        <h3>${data.location.name}</h3>
    `
}

export {
    cryptoCoins,
    setBackground,
    setArtistName,
    renderCoinData,
    getCurrentTime,
    updateCoinPrice,
    getWeatherData,
}