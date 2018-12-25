//import './utilities'
// square is in utilities but is default so we can call it with
// any name since it's the default, for example- i called it as DoSquare. 
import DoSquare, {add, name, scream} from './utilities'

console.log('index.js')

console.log(add(10, 20))
console.log(`name= ${name}`)
console.log(scream(name))

console.log(DoSquare(5))