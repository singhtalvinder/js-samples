
// Prototypal inheritance
///////////////////////////////
const Person = function (fName, lName, age, likes=[]) {
    this.firstName = fName
    this.lastName = lName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like) =>{
        bio += `${this.firstName} likes ${like}.`
    })
    return bio
}

Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

//const me1 = Person()

// constructor function...
const me2 = new Person('Mike', 'Taylor', 30, ['teaching', 'music'])

console.log(me2.getBio())
//me2.setName('Rupinder Singh')
//console.log(me2.getBio())

const me3 = new Person('Adam', 'spike', 20)
console.log(me3.getBio())
/*
// we can change the Prototype method and the change effects
// the usage after this changed implementation.
me3.getBio = function() {
    return 'Set fake prop'
}
// and if we do like the one below, we are setting a new prop .
Person.prototype.getBio = function() {
    return 'Testing !!!!!!'
}

console.log('==============')
console.log(me2.getBio())
console.log('==============')
console.log(me3.getBio())
*/