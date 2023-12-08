/*
The `**map()**` method **creates a new array** with the results of calling a provided function on every element in the calling array. */
const array1 = [1, 4, 9, 16]

// pass a function to map
const map1 = array1.map(x => x * 2)
console.log(map1)

/* PARAMETERS
`callback`
    Function that produces an element of the new Array, taking three arguments:

  `currentValue`
      The current element being processed in the array.
  `index`Optional
      The index of the current element being processed in the array.
  `array`Optional
      The array `map` was called upon.
`thisArg`Optional
    Value to use as `this` when executing `callback`.
*/

/*
The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.
*/

const numbers = [1, 4, 9]
const roots = numbers.map(num => Math.sqrt(num))
console.log(roots) // ?
console.log(numbers) // ?
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

/*
Using map to reformat objects in an array
The following code takes an array of objects and creates a new array containing the newly reformatted objects.
*/
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
]

const reformattedArray = kvArray.map(obj => {
  const rObj = {}
  rObj[obj.key] = obj.value
  return rObj
})
console.log(reformattedArray)
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

/*
Using map generically `querySelectorAll`
This example shows how to iterate through a collection of objects collected by `querySelectorAll`. This is because `querySelectorAll` returns a NodeList which is a collection of objects.
In this case we return all the selected options' values on the screen:
*/

const elems = document.querySelectorAll('p')
const values2 = [...elems].map(x => x.textContent)
