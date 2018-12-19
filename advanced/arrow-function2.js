const add = function(a, b) {
// arguments is global and is accessible only in functions.
    console.log(arguments);
    return arguments[0] + arguments[1] + arguments[2] + arguments[3] 
}

console.log(add(11,22,33,44))

// Arrow fns don't bind the this value and arebad candidates in many cases.
const add2 = (a, b)  =>{
    console.log(arguments);
    return arguments[0] + arguments[1] + arguments[2] + arguments[3] 
}

console.log(add2(11,22,33,44))


const car = {
    color: 'Blue',
    getSummary: function() {
        return `this car is ${this.color}`
    }
}
console.log(car.getSummary());

const car1 = {
    color: 'Blue',
    getSummary() { // another form of above fn
        return `this car is ${this.color}` 
    }
}
console.log(car1.getSummary());

const car2 = {
    color: 'Blue',
    getSummary: () =>{
        return `this car is ${this.color}` // will not work, this is not accessible
    }
}
console.log(car2.getSummary());