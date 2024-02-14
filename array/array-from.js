/*
A better alternative in terms of performance is using:
- `[...Array(counter)].map()`

The `**Array.from()**` method creates a new, shallow-copied `Array` instance from an array-like or iterable object.
*/
// console.log(Array.from('foo'))

// console.log(Array.from([1, 2, 3], x => x + x))S

/* PARAMETERS
`arrayLike`
    An array-like or iterable object to convert to an array.
`mapFn` (Optional)
    Map function to call on every element of the array.
`thisArg` (Optional)
    Value to use as `this` when executing `mapFn`.
*/

/*
Array from an Array-like object (arguments)
*/
const f = (...args) => Array.from([...args])
f(1, 2, 3) // ?

/*
Using arrow functions and `Array.from()`
Using an arrow function as the map function to
manipulate the elements
*/
Array.from([1, 2, 3], x => x + x)

/*
Generate a sequence of numbers
Since the array is initialized with `undefined` on each position,
the value of `v` below will be `undefined`
*/
Array.from({ length: 5 }, (v, i) => i) // ?

/*
Sequence generator (range)
Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
*/
export const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

// Generate numbers range 0..4
range(0, 4, 1)
// [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
range(1, 10, 2)
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x))
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
