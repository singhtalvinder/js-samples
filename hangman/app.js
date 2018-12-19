
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
// start the game
const game1 = new Hangman('Music play', 5)

// Guess letters eg: c,t,z...
puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
   
})

// Call get puzzle to get the puzzle word. 
// The first param specifies the word count for the puzzle.
// => How many words to e there in  a puzzle.
// NOTE: Refer the old file for callback syntax.
// This is using promises.
// So the first line getPuzzle('3').then((data) translates to :
// fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((data)=> {
 getPuzzle('3').then((puzzle)=> {
     console.log(puzzle) 
 }).catch((err)=> {
     console.log(`Error : ${err}`) 
 })



/*
// using fetch
getCountry('IN').then((country) =>{
    console.log(`Country name: ${country.name}`)
}).catch((err)=>{
    console.log(`Failed to fetch data: Error: ${err}`)
})
*/

// 1. create getLocation fn which takes no args
// 2. setup getLocation to make a request to the url and parse the data
// 3. use getLocation to print the city, region and country info.
// use the following :https://ipinfo.io/json?token=d833ddc26ef7d8 ( your actual token)
//https://ipinfo.io/json?token=8933ddc26ef7d8
getLocation().then((location) =>{
    //console.log(`Your location : ${location.city}, ${location.country}, ${location.region}`)
    return getCountry(location.country)
}).then((country) =>{
    console.log(country.name)
}).catch((err) =>{
    console.log(`Error: ${err}`)
})




/*
getCountry('US').then((country) =>{
    console.log(`Country name: ${country.name}`)
}, (err)=>{
    console.log(`Failed to fetch data: Error: ${err}`)
})
*/
// Promise chaining: 
// Suppose we need to find countries from a particular region. then
// first we need to find the region and then all the countries in that region.

/*
// fetch is alternate to httpXmlRequest
fetch('http://puzzle.mead.io/puzzle', {}).then ((response)=> {
    if(response.status === 200) {
        return response.json() // this response.json returns is promise and not just json data.

    } else {
        throw new Error('Unable to fetch the puzzle')
    }

}).then((data)=>{
    console.log(data.puzzle)
}).catch((error) =>{
    console.log(error)
})*/
// Writing the same calls using Promises.
/*
// Object has the method:hasOwnProperty , thats why accessible.
const product = {
    name: 'Influence'
}

// hasOwnProperty -is on the current obj and not in the chain.
console.log(product.hasOwnProperty('name'))

console.log(product)
*/
/*
const team = ['luke', 'Mike']
console.log(team)

const getScore =  () => 1
console.log(getScore)
const product = 'Computer'
console.log(product.split(''))
*/
