
import Hangman from './hangman'
import getPuzzle from './request'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
// start the game- static way.
//const game1 = new Hangman('Music play', 5)
let game1
/*
// Guess letters eg: c,t,z...
puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage
*/
window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const startGame = async () =>{
   const NoOfWordsInPuzzle = '3'
   const puzzle = await getPuzzle(NoOfWordsInPuzzle) 
   const NoOfRetries = 5
   // start game with 3 letter word fetched above, with 5 retries.
   game1 = new Hangman(puzzle, NoOfRetries)
   render()

}

const render = () => {
    puzzleEl.innerHTML = ''//game1.puzzle
    guessesEl.textContent = game1.statusMessage
    
    // for each char in the string , add a span to #puzzle
    // The span test should just be letter itself.
    game1.puzzle.split('').forEach((letter)=> {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })



}
document.querySelector('#reset').addEventListener('click', startGame)

startGame()
