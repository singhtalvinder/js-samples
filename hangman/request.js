// /using fetch api for making a http request.
const getPuzzle = async (wordCount) =>{
    // Make an HTTP request using fetch api.
    // we do return here for fetch because our calling method needs a promise to work on.

    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200) {
        const data = await response.json()
        // Next line of code will wait till the await returns above.
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
    
}
//////////////////////////////////////////////
/*
const getPuzzleOld = (wordCount) =>{
    // Make an HTTP request using fetch api.
    // we do return here for fetch because our calling method needs a promise to work on.
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)=>{
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data)=>{
        // would get resolved with whatever comes back from response.json() above.
        return data.puzzle
    })
}
*/
//getCurrentCountry- returns a promise that resolved the country object for 
// current location, using async-await ...
const getCurrentCountry = async () =>{
    const location = await getLocation()
    return getCountry(location.country)
}

/////////////////////////////////////////
const getCountry = async (countryCode) => {
    // Make a request to get all countries.
    // Parse resp, find your country by its alpha2code
    const response = await fetch('http://restcountries.eu/rest/v2/all')
    if(response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
            throw new Error('Unable to fetch country data')
    }
}

// get location based on the ip address.
const getLocation = async () =>{
    const response = await fetch('https://ipinfo.io/json?token=8933ddc26ef7d8')
    if(response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch location!!')
    }
}

/*
// Without async-await
const getCountry = (countryCode) => {
    // Make a request to get all countries.
    // Parse resp, find your country by its alpha2code

    return fetch('http://restcountries.eu/rest/v2/all').then((response) =>{
        if(response.status === 200) {
            return response.json()

        } else {
            throw new Error('Unable to fetch country data')
        }
    }).then((data) =>{
        return data.find((country) => country.alpha2Code === countryCode)
    })
}

// get location based on the ip address.
const getLocation = () =>{
    return fetch('https://ipinfo.io/json?token=8933ddc26ef7d8').then((response) =>{
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch location!!')
        }
    })
}
*/ 
/* This uses http request .
const getPuzzle = (wordCount) => new Promise((resolve,reject) =>{
    // Make an HTTP request
    const request = new XMLHttpRequest()

    // Add new listener
    request.addEventListener('readystatechange', (e) =>{
        // Check if done.
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if(e.target.readyState === 4) {
            reject('An error occurred!!')
        }
    })

    // get a random word(s)  each time for the game. 
    // The parameter in the end : ?wordCount=3 is used to specify how may 
    // words to we need to get the puzzle string. here, its 3
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()

})


// This is using Promises, to see using Callback :
// Refer the .old file.

const getCountry = (countryCode) => new Promise((resolve, reject) => {
    // Make a request to get all countries.
    // Parse resp
    // find your country by its alpha2code
    
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            console.log(`Country name is ${country.name}`)
            // pass the country information to the resolve in success.
            resolve(country)
        } else if(e.target.readyState === 4) {
            console.log('Unable to fetch data for countries...')
            reject('Unable to fetch data') // fail case, reject
        }
    })

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send()
})
*/