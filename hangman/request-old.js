const getPuzzle = (wordCount, callback) =>{
    // Make an HTTP request
    const request = new XMLHttpRequest()

    // Add new listener
    request.addEventListener('readystatechange', (e) =>{
        // Check if done.
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            //console.log(data)
            callback(undefined, data.puzzle)
        } else if(e.target.readyState === 4) {
            callback('An error took place.', undefined)
            //console.log('an error took place!! ')
        }

    })

    // get a random word(s)  each time for the game. 
    // The parameter in the end : ?wordCount=3 is used to specify how may 
    // words to we need to get the puzzle string. here, its 3
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}


//1. Create a new func for getting coutry details
//2. Call it with 2-arguments: country code, callback func
//3. Make the http request and call the callback with country info
//4. use the callback to print the country name.
const getCountry = (countryCode, callback) =>{
    // Make a request to get all countries.
    // Parse resp
    // find your country by its alpha2code
    
    const countryRequest = new XMLHttpRequest()

    // Uses: Closure- is a combination of a function and lexical scope in which it was defined.
    // accessing callback below.
    countryRequest.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            console.log(`Country name is ${country.name}`)
            // pass the country information to the callback in success.
            callback(undefined, country)
        } else if(e.target.readyState === 4) {
            console.log('Unable to fetch data for countries...')
            callback('Unable to fetch data') // , undefined is not needed here 
        }
    })

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send()
}
