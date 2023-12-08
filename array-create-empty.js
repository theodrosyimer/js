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
a) Create and fill array x1,000,000
b) Create and fill array x1,000
check: [make array and fill x1000000 (version 1) - JavaScript benchmark at JSBench.me](https://jsbench.me/kmkw1uybkx/1)
the fastest first then second...
*/
// a1)
// b1)
const arr2 = [...Array(100)].map((_u, i) => i) // ?

// a2) ≈1-5% slower
// b2) ≈5-7.5% slower
Array(100)
  .fill(null)
  .map((_u, i) => i) // ?

// a3) ≈55-60% slower
// b4) ≈60% slower
const a = [...Array(100).keys()] // ?

// a4) ≈65-70% slower
// b5) ≈75% slower
Array.from({ length: 100 }, (_u, i) => i) // ?

// a5) returns --> RangeError: Maximum call stack size exceeded
// b3) ≈13-14.5% slower
Array.apply(null, Array(100)).map((_u, i) => i) // ?
