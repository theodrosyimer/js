/* PARAMETERS

`callback`
    A function to execute on each element in the array (except for the first, if no `initialValue` is supplied), taking four arguments:

  `accumulator`
      The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or `initialValue`, if supplied (see below).
  `currentValue`
      The current element being processed in the array.
  `index` Optional
      The index of the current element being processed in the array. Starts from index 0 if an `initialValue` is provided. Otherwise, starts from index 1.
  `array` Optional
      The array `reduce()` was called upon.
`initialValue` Optional
    A value to use as the first argument to the first call of the `callback`. If no `initialValue` is supplied, the first element in the array will be used and skipped. Calling `reduce()` on an empty array without an `initialValue` will throw a `TypeError`.
*/

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Description
*/

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Examples
*/

/* eslint-disable no-unused-vars */
/*
The `**reduce()**` method executes a **reducer** function (that you provide) on each element of the array, resulting in a single output value.
*/
const array1 = [1, 2, 3, 4]
const reducer = (accumulator, currentValue) => accumulator + currentValue

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer))
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5))
// expected output: 15


/*
### Sum all the values of an array
*/
const total = [0, 1, 2, 3].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
)

console.log(total)

/*
### Sum of values in an object array
To sum up the values contained in an array of objects, you **must** supply an `initialValue`, so that each item passes through your function.
*/
const initialValue = 0
const sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  initialValue
)

console.log(sum)

/*
Counting instances of values in an object
*/
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

const countedNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++
  } else {
    allNames[name] = 1
  }
  return allNames
}, {})
console.log(countedNames)

/*
Grouping objects by a property
 */
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
]

const groupBy = (objectArray, property) =>
  objectArray.reduce((acc, obj) => {
    const key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})

const groupedPeople = groupBy(people, 'age')
console.log(groupedPeople)

/*
Bounding arrays contained in an array of objects using the spread operator and initialValue
 */

// friends - an array of objects
// where object field "books" - list of favorite books
const friends = [
  {
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21,
  },
  {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26,
  },
  {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18,
  },
]

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
const allbooks = friends.reduce(
  (accumulator, currentValue) => [...accumulator, ...currentValue.books],
  ['Alphabet']
) /*?. $*/
console.log(allbooks)

const allbooks2 = friends.reduce(
  (accumulator, currentValue) => {
    accumulator.push(...currentValue.books)
    return accumulator
  },
  ['Alphabet']
) /*?. $*/
console.log(allbooks2)

/*
Running Promises in Sequence
*/

/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  )
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5)
  })
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2)
  })
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
  return a * 3
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4)
  })
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10).then(console.log) // 1200

/*
Function composition enabling piping
*/

// Building-blocks to use for composition
const double = x => x + x
const triple = x => 3 * x
const quadruple = x => 4 * x

// Function composition enabling pipe functionality
const pipe =
  (...functions) =>
  input =>
    functions.reduce((acc, fn) => fn(acc), input)

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)

// Usage
multiply6(6)
multiply9(9)
multiply16(16)
multiply24(10)

const pipe1 =
  (...functions) =>
  ([input, inp]) =>
    functions.reduce((acc, f) => f(acc), [input, inp])

const unfoldArrToString = arr => [...arr].join(' ')

const first = arr => {
  // arr
  let [x, y] = [...arr]
  x = `${x} first!!`
  y = `touched in first!!`
  // arr
  // x
  // y
  return [x, y]
}
const second = arr => {
  // arr
  let [x, y] = [...arr]
  x = `${x} second!!`
  y = `retouched in second!!`
  // arr
  // x
  // y
  return [x, y]
}
const pipeOrderBeRevealed = pipe1(first, second)

pipeOrderBeRevealed(['i am', 'untouched'])
// pipeOrderBeRevealed([])
