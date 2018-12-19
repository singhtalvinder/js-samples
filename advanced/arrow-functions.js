//The following example finds an element in the array that is a
// prime number (or returns undefined if there is no prime number).
/*function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        console.log(`start = ${start}, element= ${element}, element%start=${element%start}`)
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
  console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
  console.log([4, 5, 8, 12].find(isPrime)); // 5
*/


const square1 = function(number) {
    return number * number    
}

const square2 = (number) => {
    return number * number
}

// Short hand arrow fn syntax
const square3 = (number) => number * number


console.log(`Square of 5 is ${square2(5)}`);


const people = [{
    name: 'abc',
    age: 27
},
{
    name: 'zxsf',
    age: 34
},
{
    name: 'msnrtry',
    age: 21
}]


const under30 = people.filter(function(person) {
    return person.age <30
})
console.log(under30)

// using arrow fn
const under30_2= people.filter((person) => person.age < 30)
console.log(under30_2)


const age21 = people.find((person) => person.age === 21)
console.log(age21.name)


//===============================
const inventory = [
    {name: 'bananas', quantity: 10},
    {name: 'apples', quantity: 50},
    {name: 'oranges', quantity: 40},
    {name: 'cherries', quantity: 20},
];

const result = inventory.find(fruit => fruit.name === 'oranges');

console.log(result)
//==================================
// old way

function isOrange(fruit) {
    return fruit.name === 'oranges'
}
const res = inventory.find(isOrange);
console.log(res)

function isOrange(fruit) {
    return fruit.name === 'oranges'
}
const res2 = inventory.find(function(fruit) {
    return fruit.name === 'oranges'
});
console.log(res2)
