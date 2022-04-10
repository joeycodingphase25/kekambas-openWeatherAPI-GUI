// {
//     const APIkey = 'bbe0efa1ace71329d39dfcdba1397dc0'
//     let cityName = 'chicago'
//     let res  = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${APIkey}`)               
//     let data = await res.json()

//     // (input − 273.15) × 9/5 + 32 = formula to translate temp
//     // console.log(res[0])
// }

{
    // grab form
    let form = document.getElementById('cityForm')
    // grab button holder
    let buttonHolder = document.getElementById('row')
    
    // handle the submit
    async function handleSubmit(e){
        e.preventDefault()
        let cityName = e.target.cityName.value
        // make the custom funtion GET FROM API request
        let city = await getCityInfo(cityName)
        // now create the input variable
        min_temp = city.main.temp_min
        max_temp = city.main.temp_max
        weather = city.weather[0].main
        humidity = city.main.humidity
        name1 = city.name
        // console.log(min_temp, max_temp, weather, humidity)
        // Build the DIV To hoouse the information
        await buildTable(min_temp, max_temp, weather, humidity, name1)
    };
    // creating a local scope and build API builder
    async function getCityInfo(cityName){
        const APIkey = '36e4b28b5cab84fb191a88cc77d7322d'
        try{
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=imperial`)
            let data = await res.json()
            return data
        } catch(e){
            console.error(e)
        }
    }
    
    async function handleClick(e){
        let myButtons = document.querySelectorAll('.col-2 > button');
        
        for (let i=0; i< myButtons.length; i++){
            let button = myButtons[i]
            button.addEventListener('click', () => {
                let tableVar = document.getElementById('cityTable');
                tableVar.innerHTML = 'this is a test'
            })
        }
    }
    
    async function buildTable(min_temp, max_temp, weather, humidity, name){
        const table = document.getElementById('cityTable')
        table.innerHTML = ''
        // create title
        const theadTitle = document.createElement('thead')
        theadTitle.className = 'color'
        theadTitle.innerHTML = `<th><h1>${name}</h1></th>`
        table.append(theadTitle)
        // create thead and tbody for high temp
        const thead = document.createElement('thead')
        thead.className ='color1'
        thead.innerHTML = `<th><h1>Max Temperature</h1></th>`
        table.append(thead)
        const tbody = document.createElement('tbody')
        tbody.innerHTML = `<tr><td><h2>${max_temp} F</h2></td></tr>`
        table.append(tbody)
        
        // create thead and tbody for low temp
        const thead2 = document.createElement('thead')
        thead2.className ='color2'
        thead2.innerHTML = `<th><h1>Min Temperature</h1></th>`
        table.append(thead2)
        const tbody2 = document.createElement('tbody')
        tbody2.innerHTML = `<tr><td><h2>${min_temp} F</h2></td></tr>`
        table.append(tbody2)
        
        // create thead and tbody for weather status
        const thead3 = document.createElement('thead')
        thead3.className ='color3'
        thead3.innerHTML = `<th><h1>Weather Status</h1></th>`
        table.append(thead3)
        const tbody3 = document.createElement('tbody')
        tbody3.innerHTML = `<tr><td><h2>${weather}</h2></td></tr>`
        table.append(tbody3)
        
        // create thead and tbody for weather status
        const thead4 = document.createElement('thead')
        thead4.className ='color4'
        thead4.innerHTML = `<th><h1>Humidity</h1></th>`
        table.append(thead4)
        const tbody4 = document.createElement('tbody')
        tbody4.innerHTML = `<tr><td><h2>${humidity}%</h2></td></tr>`
        table.append(tbody4)

        // append this city name to a button to be stored and called later
        const div = document.createElement('div')
        div.className = 'col-2'
        const button = document.createElement('button')
        button.className = name
        button.innerHTML = name
        buttonHolder.append(div)
        div.append(button)
        
    }
    form.addEventListener('submit', handleSubmit);

    buttonHolder.addEventListener('click', handleClick);
}


