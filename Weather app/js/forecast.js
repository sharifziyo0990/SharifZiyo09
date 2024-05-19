const KEY = 'ab3439a5de74f08a144a6bbaa0994db1'

const getData = async (city) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`

    const req = await fetch(base + query)
    const data = await req.json()

    return data
}

// getData('Tashkent')
//     .then((data) => {
//         console.log(data)
//     })