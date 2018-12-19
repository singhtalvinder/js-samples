//Closure and currying
/*const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())
*/

// Adder
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

const add100 = createAdder(100)
console.log(add100(-90))


// Create a tipper method(createTipper), which takes in the base tip
// set it up to return a function that takes in the bill
// amount 
// Call createTipper to generate few funcs for different %ages
// use the generated funcs to calc tips 

const createTipper = (baseTip) => {
    return (amount) =>{
        return baseTip * amount
    }
}

const tip20 = createTipper(.20)
const tip40 = createTipper(.40)

console.log(tip20(100))
console.log(tip40(100))





/*const myFunction = () =>{
    const message = 'This is my message'
    const printMessage = ()=>{
        console.log(message)
    }
    printMessage()
}

myFunction()
*/