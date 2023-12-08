/*
The `**filter()**` method **creates a new array** with all elements that pass the test implemented by the provided function.
*/
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

/* eslint-disable-next-line */
const result = words.filter(word => word.length > 6) // ?

/* PARAMETERS
`callback`
    Function is a predicate, to test each element of the array. Return `true` to keep the element, `false` otherwise. It accepts three arguments:

  `element`
      The current element being processed in the array.
  `index`Optional
      The index of the current element being processed in the array.
  `array`Optional
      The array `filter` was called upon.
`thisArg`Optional
    Value to use as `this` when executing `callback`.
*/

/* Filtering out all small values
The following example uses filter() to create a filtered array that has all elements with values less than 10 removed.
*/
const isBigEnough = value => value >= 10

/* eslint-disable-next-line */
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough) // ?

/* Filtering invalid entries from JSON
The following example uses filter() to create a filtered json of all elements with non-zero, numeric id.
*/
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: 'undefined' },
]

let invalidEntries = 0

function isNumber(obj) {
  /* eslint-disable-next-line */
  return obj !== undefined && typeof obj === 'number' && !isNaN(obj)
}

function filterByID(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true
  }
  invalidEntries++
  return false
}

const arrByID = arr.filter(filterByID)

console.log('Filtered Array\n', arrByID)

console.log('Number of Invalid Entries = ', invalidEntries)

/*
Searching in array
Following example uses filter() to filter array content based on search criteria
*/

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(array, query) {
  return array.filter(el => {
    el.indexOf('e') // ?
    return el.toLowerCase().includes(query.toLowerCase()) // ?
  })
}

console.log(filterItems(fruits, 'ap'))
console.log(filterItems(fruits, 'an'))

const filter = pred => array => array.filter(pred)

const predicate = el => el.toLowercase()
filter(predicate) // ?
