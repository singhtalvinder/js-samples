// The hangman game.
///////////////////////////////////////////
const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = [] //['c', 'i', 'a'] // empty array initially.
    this.status = 'Playing'
}

Hangman.prototype.calculateStatus = function() {
    /*
    let finished = true
    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter)) {
            
        } else {
            finished = false
        }
    })*/
    // alternate way
    /*
    const lettersUnguessed = this.word.filter((letter) => {
        return !this.guessedLetters.includes(letter)
    })

    const finished = lettersUnguessed.letter === 0
    */

    const finished = this.word.every((letter) =>
     this.guessedLetters.includes(letter)
    )
    
    if(this.remainingGuesses === 0) {
        this.status = 'Failed'
    } else if (finished) {
        this.status = 'Finished'
    } else {
        this.status = 'Playing'
    }
}

Hangman.prototype.getStatusMessage = function () {
    if(this.status === 'Playing') {
        return `Guesses left: ${this.remainingGuesses}`
    } else if(this.status === 'Failed') {
        return `Nice try! The word was "${this.word.join('')}."`
    } else {
        return 'Good job! You  guessed the word!'
    }
}

Hangman.prototype.getPuzzle = function() {
    let puzzle = ''
    this.word.forEach((letter) =>{
        if(this.guessedLetters.includes(letter) || letter === '') {
            puzzle += letter

        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if(this.status !== 'Playing') {
        return
    }

    if(isUnique) {
        this.guessedLetters.push(guess)
    }

    if(isUnique && isBadGuess) {
        this.remainingGuesses--
    }
    this.calculateStatus()
}
