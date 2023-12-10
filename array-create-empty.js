/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
/* eslint-disable prefer-spread */
// @ts-nocheck
/* eslint-disable babel/no-unused-expressions */
/* eslint-disable no-unused-expressions */

// 1) To create new array which, you cannot iterate over, you can use array constructor:
Array(100)

// or
new Array(100)

// 2) You can create new array, which can be iterated over like below:
// a) All JavaScript versions
// Array.apply:
Array.apply(null, Array(100))

// Array.prototype.fill
Array(100).fill(undefined)

// b) From ES6 JavaScript version
// Spread operator:
const arr = [...Array(100)] // ?

// Array.from without a mapFn returns `undefined`
Array.from({ length: 100 }) // ?

/*
a) Create and fill array x1_000_000
b) Create and fill array x1_000
check: [make array and fill x1_000_000 (version 1) - JavaScript benchmark at JSBench.me](https://jsbench.me/kmkw1uybkx/1)
the fastest first then second...
*/
// a2) ≈75% slower
// b5) ≈94% slower than b1
const arr2 = [...Array(100)].map((_u, i) => i) // ?

// a1) fastest and by far
// b1) fastest and by far
let array = Array(10000).fill(null)

for (let i = 0; i < array.length; i++) {
  array[i] = i
}

// a3) ≈77% slower
// b3) ≈85.6% slower than b1
Array(100)
  .fill(null)
  .map((_u, i) => i) // ?

// a5) ≈94% slower
// b4) ≈92% slower than b1
const a = [...Array(100).keys()] // ?

// a4) ≈91% slower
// b6) ≈95% slower
Array.from({ length: 100 }, (_u, i) => i) // ?

// a6) returns --> RangeError: Maximum call stack size exceeded
// b2) ≈85% slower than b1
Array.apply(null, Array(100)).map((_u, i) => i) // ?
