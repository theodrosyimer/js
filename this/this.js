// source: [this Demystified // Professional JavaScript - YouTube](https://www.youtube.com/watch?v=X-Q22LkJhs8&t=101s&ab_channel=basarat)

function simple(value) {
  console.log(value, this)
}

simple(123)

const person = { name: 'Theo' }

simple.call(person, 456)

person.simple = simple

person.simple(789)

console.log('------------------------------------------------------------')

function growOlder() {
  this.age++
}

const theo = { name: 'Theo', age: 41, growOlder }
const marie = { name: 'Marie', age: 40, growOlder }

console.log(theo)
theo.growOlder()
console.log(theo)

console.log(marie)
marie.growOlder()
console.log(marie)

console.log('------------------------------------------------------------')

// `this` will always be refering to the execution context of the function, except for 2 cases:
// 1. arrow functions
// 2. `bind()` method
