/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

// from: [13:46 - Factory function vs Constructor vs Class](https://www.youtube.com/watch?v=fbuyliXlDGI&list=PLCWy_0yV0bgj7srZuvNPuVLPGOKm4WJd4&index=2&ab_channel=ColorCode&t=13m46s)

const myPrototype = {
  greet() {
    return `Hello, i am ${this.name}`
  },
  sayMyAge() {
    return `I am ${this.age}`
  },
}

function createPerson(name, age) {
  return Object.create(myPrototype, {
    name: { value: name },
    age: { value: age },
  })
}

const me = createPerson('Theo', 41)
// eslint-disable-next-line no-unused-expressions
me.name // ?
me.greet() // ?
me.sayMyAge() // ?

/* ************************************************************** */
/* ************************************************************** */

const myPrototype2 = {
  greet() {
    return `Hello, i am ${this.name}`
  },
  sayMyAge() {
    return `I am ${this.age}`
  },
}

function createPerson2(originalObject) {
  let props = {}
  for (const key in originalObject) {
    props = {
      [key]: {
        value: originalObject[key],
        enumerable: true,
        configurable: true,
        writable: true,
      },
      ...props,
    }
    if (Object.hasOwnProperty.call(originalObject, key)) {
      props = {
        [key]: {
          value: originalObject[key],
          enumerable: true,
          configurable: true,
          writable: true,
        },
        ...props,
      }
    }
  }
  // eslint-disable-next-line no-shadow
  return Object.create(myPrototype2, props)
}

const me2 = createPerson2({
  name: 'Mick',
  age: 52,
})
// eslint-disable-next-line no-unused-expressions
me2.name // ?
me2.greet() // ?
me2.sayMyAge() // ?

/* ************************************************************** */
/* ************************************************************** */

const myPrototype3 = {
  greet() {
    return `Hello, i am ${this.name}`
  },
  sayMyAge() {
    return `I am ${this.age}`
  },
}

function createPerson3(inputObject) {
  return {
    ...myPrototype3,
    ...inputObject,
  }
}

const me3 = createPerson3({
  name: 'Mick',
  age: 52,
})
// eslint-disable-next-line no-unused-expressions
me3.name // ?
me3.greet() // ?
me3.sayMyAge() // ?
