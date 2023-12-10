/* eslint-disable max-classes-per-file */

// ES7 syntax version
// Best method because of how `this` is handle (lexical scope) using an arrow function as a method
class Human {
  gender = 'male'

  printGender = () => {
    console.log(this.gender)
    return this.gender
  }
}
class Person extends Human {
  name = 'Max'

  printMyName = () => {
    console.log(this.name)
    return this.name
  }
}

const person = new Person()
person.printMyName() // ?
person.printGender() // ?

// `this` is set when assigning a method to a variable !!!
// that why using ES7 syntax IS better
const person1 = new Person()
const p1 = person1.printMyName
const p2 = person1.printGender

// the code will NOT blow up
p1() // ?
p2() // ?

// / //////////////////////////////////////////////////////////////////////////////////

// ES6 syntax version
class Human1 {
  constructor() {
    this.gender = 'male'
  }

  printGender() {
    console.log(this.gender)
    return this.gender
  }
}
class Person1 extends Human1 {
  constructor() {
    super()
    this.name = 'Max'
  }

  printMyName() {
    console.log(this.name)
    return this.name
  }
}
// `this`is set
const person2 = new Person1()
person2.printMyName() // ?
person2.printGender() // ?

// `this` is NOT set when assigning a method to a variable !!!
// that why using ES7 syntax IS better
const person3 = new Person1()
const p3 = person3.printMyName
const p4 = person3.printGender

// the code will blow up
p3()
p4()
