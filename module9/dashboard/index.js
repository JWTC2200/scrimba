
import { cryptoCoins, setBackground, setArtistName, renderCoinData, getCurrentTime, updateCoinPrice, getWeatherData } from "./util.js"

async function getBackground() {
    try {
        const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
        const data = await res.json()
        setBackground(data.urls.regular)
        setArtistName(data.user.name)
    } catch(error) {
        console.log(error)
        setBackground("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTA2MjYyNTB8&ixlib=rb-4.0.3&q=80&w=1080")
        setArtistName("Marita Kavelashvili")
    } 
}

function getCryptoCoinData() {
    document.getElementById("crypto-container").innerHTML = ""
    cryptoCoins.forEach(coin => 
        getCoinData(coin)    
    )
}

async function getCoinData(coin) {
    try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`)
        if(!res.ok) {
            console.log(res)
            throw Error(`${res.status}: ${res.statusText}`)
        }
        const data = await res.json()
        renderCoinData(data)    
    } catch(error) {
        console.log(error)
    }
}



setInterval(getCurrentTime, 1000)
setInterval(updateCoinPrice, 15000)

getCryptoCoinData()
getCurrentTime()
getBackground()
getWeatherData()

