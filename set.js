/* eslint-disable no-unused-expressions */
/*
The `Set` object lets you store unique values of any type, whether primitive values or object references.
A `Set` takes any iterable object as a parameter for its constructor, if none, or its value is `null`, the `new Set()` is empty.
*/

// Instantiate a `new Set`
const mySet = new Set()

mySet.add(1) // Set [ 1 ]
mySet.add(5) // Set [ 1, 5 ]
mySet.add(5) // Set [ 1, 5 ]
mySet.add('some text') // Set [ 1, 5, 'some text' ]
const o = { a: 1, b: 2 }
mySet.add(o)

mySet.add({ a: 1, b: 2 }) // o is referencing a different object so this is okay

mySet.has(1) // true
mySet.has(3) // false, 3 has not been added to the set
mySet.has(5) // true
mySet.has(Math.sqrt(25)) // true
mySet.has('Some Text'.toLowerCase()) // true
mySet.has(o) // true

mySet.size // 5

mySet.delete(5) // removes 5 from the set
mySet.has(5) // false, 5 has been removed

mySet.size // 4, we just removed one value
console.log(mySet) // Set [ 1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2} ]

// `Set.prototype.values()` = Set.prototype.keys()`
// Returns a new Iterator object that contains the values for each element in the Set object in insertion order.
const iterator = mySet.values() // ?
iterator.next() // ?

// return the same values
const iterator2 = mySet.keys() // ?
iterator2.next() // ?

// The `Set` prototype has a `Symbol.iterator` method, so we can iterate a `Set` with a `for of` loop
for (const val of mySet) {
  console.log(val)
}

// It works with a generator too, as it is an iterable object
// create a generator
function* main() {
  // An array containing duplicate data
  const arr = [1, 2, 2, 3, 3, 1]

  for (let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}

// possible to convert any iterable object to a 'Set', here an example with a generator
const mySet2 = new Set([...main()]) // ?

mySet2.forEach(value => {
  console.log(value)
})

export {}
