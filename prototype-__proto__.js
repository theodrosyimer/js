/* eslint-disable no-proto */
// .__proto__ === [[Prototype]] (a hidden property in objects)

/**
 * ### Example 1
 */
const alpha = { name: 'Alpha' }

console.log('[typeof alpha.name]:', typeof alpha.name)

//  if `alpha` doesn't have a `toString` method,
// it will look for it in `alpha.__proto__`
// and if it doesn't find it there, it will look for it in `alpha.__proto__.__proto__`
// and so on until it reaches the end of the prototype chain
console.log('[typeof alpha.toString]:', typeof alpha.toString)

// `__proto__` is an object
console.log('[typeof alpha.__proto__]:', typeof alpha.__proto__)
// better to access `__proto__` using `Object.getPrototypeOf`
console.log(
  '[typeof Object.getPrototypeOf(alpha)]:',
  typeof Object.getPrototypeOf(alpha),
)

// `__proto__` is an object that has a `toString` method
console.log(
  '[typeof alpha.__proto__.toString]:',
  typeof alpha.__proto__.toString,
)
// better to access `__proto__` using `Object.getPrototypeOf`
console.log(
  '[typeof Object.getPrototypeOf(alpha).toString()]:',
  typeof Object.getPrototypeOf(alpha).toString(),
)

// example of a prototype chain by using `__proto__`
const beta = { age: 10, __proto__: alpha }

console.log('[beta.age]:', beta.age)
console.log('beta.name from `alpha`:', beta.name)

alpha.name = 'Alpha 2'
console.log('Editing alpha.name changes `beata.name`:', beta.name)

/**
 * ### Example 2
 */

const person = {
  __proto__: {
    __proto__: {
      __proto__: {
        name: 'Alpha',
        age: 10,
      },
    },
  },
}

console.log('[person.name]:', person.name)
console.log('[person.age]:', person.age)
console.log('[person.weight]:', person.weight)

// this is what JavaScript does behind the scenes to find `weight` property in this example:
console.log(person.__proto__.__proto__.__proto__.__proto__.__proto__)

// `__proto__` returns finally a `null` value so JavaScript returns `undefined`
console.log(person.__proto__.__proto__.__proto__.__proto__.__proto__ === null)
