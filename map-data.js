/*
from: [Map - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Methods)
*/
const myMap = new Map()

const keyString = 'a string'
const keyObj = {}
const keyFunc = () => {}

// setting the values
myMap.set(keyString, "value associated with 'a string'") //
myMap.set(keyObj, 'value associated with keyObj') //
myMap.set(keyFunc, 'value associated with keyFunc') //

/* eslint-disable-next-line */
myMap.size // 3

// getting the values
myMap.get(keyString) // "value associated with 'a string'"
myMap.get(keyObj) // "value associated with keyObj"
myMap.get(keyFunc) // "value associated with keyFunc"

myMap.get('a string') // "value associated with 'a string'"
// because keyString === 'a string'
myMap.get({}) // undefined, because keyObj !== {}
myMap.get(() => {}) // undefined, because keyFunc !== function () {}

/*
From here, it is my own examples
*/

// We can iterate over an `Iterator` object return from `.entries()`, `.keys()`, `.values()` methods (using a closure)
const entries = myMap.entries() // ?

// // either manually,
// entries.next() // ?
// entries.next() // ?
// entries.next() // ?
// entries.next() // ?

// or with a `for of` loop
for (const value of entries) {
  console.log(value)
}

// // Using destructuring
// for (const [key, value] of entries) {
//   console.log(key, value)
// }

// for (const [value] of entries) {
//   console.log(value)
// }

// // using chaining doesn't work??
// myMap.keys().next() // ?
// myMap.keys().next() // ?
// myMap.keys().next() // ?
// myMap.keys().next() // ?

// back using a closure
const keys = myMap.keys()

// keys.next() // ?
// keys.next() // ?
// keys.next() // ?
// keys.next() // ?

for (const value of keys) {
  console.log(value)
}

// for (const [key, value] of keys) {
//   console.log(key, value)
// }

// for (const [value] of keys) {
//   console.log(value)
// }

const values = myMap.values()

// values.next() // ?
// values.next() // ?
// values.next() // ?
// values.next() // ?

for (const value of values) {
  console.log(value)
}

// for (const [key, value] of values) {
//   console.log(key, value)
// }

// for (const [value] of values) {
//   console.log(value)
// }
