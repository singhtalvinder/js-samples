//Named export as below : add, name, scream.....

// Default export- atmost 1 export is allowed
console.log('utilities.js')

// export const add = (a, b) =>{
//     return a + b
// }

// export const name="Programmer 1"
// export const scream = (text) =>`${text.toUpperCase()}`

// const square =(x) => x * x
// export default square

// Other way of exporting !!
const add = (a, b) => a + b

const name = 'Singh' 
const scream = (text) =>`${text.toUpperCase()}`

const square = (x) => x * x

export {
    add, 
    name, 
    scream,
    square as default
}
