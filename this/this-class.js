/* eslint-disable prefer-destructuring */
// source: [this Demystified // Professional JavaScript - (Youtube)](https://www.youtube.com/watch?v=X-Q22LkJhs8&t=101s&ab_channel=basarat)

// check ./class.js

// ES7 syntax vs ES6 syntax
class Person {
  // private _age: number
  constructor(_age /* : number */) {
    this._age = _age
  }

  // slight difference of performance vs using a method (better) and an instance property
  // Pros: `this` is captured correctly with an instance property using an arrow function
  // Cons: an instance property is not shared across all instances of the class
  growOld = () => {
    this._age++
  }

  // Pros: a method is shared across all instances of the class
  // Cons: needs to be called correctly! see below
  age() {
    return this._age
  }
}

const person = new Person(0)
person.growOld() // ?
person.age() // ?

// using ES7 syntax (arrow functions) the code WILL NOT blow up when assigning a method to a variable
const growOld = person.growOld
setTimeout(person.growOld, 1000)
growOld() // ?

// using ES6 shorthand syntax the code WILL blow up when assigning a method to a variable
const age = person.age
age() // ?
