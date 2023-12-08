/* eslint-disable prefer-destructuring */

// check ./class.js
// ES7 syntax
// Always use ES7 syntax vs ES6 syntax
class Person {
  // private _age: number
  constructor(_age /* : number */) {
    this._age = _age
  }

  growOld = () => {
    this._age++
  }

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
