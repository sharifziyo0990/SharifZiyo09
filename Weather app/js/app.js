const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')
const mziyo = document.getElementById('mziyo')

const updateUI = (weather) => {
    console.log("UPDATE UI", weather)
    details.innerHTML =
        `
    <div id="details" class="text-uppercase">
        <h5 class="mb-3">${weather.name}, ${weather.sys.country}</h5>
        <p class="mb-3">${weather.weather[0].main}</p>
        <div class="display-4 mb-3">
            <span>${Math.round(weather.main.temp)}</span>
            <span>&deg;C</span>
        </div>
    </div>
    `

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
        mziyo.classList.add('d-none')
    }

    weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

}

const getWeather = async (city) => {
    const data = await getData(city)
    return data
}


changeLocation.addEventListener('submit', (e) => {
    e.preventDefault()
    const cityName = changeLocation.city.value.trim()
    changeLocation.reset()
    getWeather(cityName).then((data) => updateUI(data))
})