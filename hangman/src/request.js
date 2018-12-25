// NOTE:  There is one problem with apps that ue http in a https site and vice versa,
//        so deployment becomes a problem and apps won't work.
//        The solution is to omit the (protocol) http: or https: from the start and just
//        start from the //<site-name> so that it matches the protocol of the hosting
//        website.

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
    // See NOTE pm top.
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if(response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
            throw new Error('Unable to fetch country data')
    }
}

// get location based on the ip address.
const getLocation = async () =>{
    // See NOTE pm top.
    const response = await fetch('//ipinfo.io/json?token=8933ddc26ef7d8')
    if(response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch location!!')
    }
}

export {getPuzzle as default}
