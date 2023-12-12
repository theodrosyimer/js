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
const arr = [...Array(100)]

// Array.from without a mapFn returns `undefined`
Array.from({ length: 100 })

/*
a) Create and fill array x1_000_000
b) Create and fill array x1_000
check: [make array and fill x1_000_000 (version 1) - JavaScript benchmark at JSBench.me](https://jsbench.me/kmkw1uybkx/1)
the fastest first then second...
*/

function forLoopPush(size) {
  let array = []

  for (let i = 0; i < size; i++) {
    array.push(i)
  }
  return array
}

function spreadAndMap(size) {
  return [...Array(size)].map((_, i) => i)
}

function forLoopFill(size) {
  let array = []
  for (let i = 0; i < Array(size).fill(null); i++) {
    array[i] = i
  }
  return array
}

function fillAndMap(size) {
  return Array(size)
    .fill(0)
    .map((_, i) => i)
}

function spreadAndKeys(size) {
  return [...Array(size).keys()]
}

function arrayFromAndMap(size) {
  return Array.from({ length: size }, (_, i) => i)
}

function applyAndMap(size) {
  return Array.apply(null, Array(size)).map((_, i) => i)
}

/* ************************************************************************

*************************************************************************** */

import { bench } from '../js-sandbox/performance-optimizations/time-it.js'

const iterationCount = [10, 100, 1000, 10_000]
const sizes = [10, 100, 1000, 10_000, 100_000]
// const inputList = Array(size)
//   .fill(null)
//   .map((_, i) => i)

bench([
  {
    label: 'Comparing different ways to create an array',
    count: iterationCount,
    functions: [
      forLoopPush,
      forLoopFill,
      fillAndMap,
      spreadAndMap,
      spreadAndKeys,
      arrayFromAndMap,
      applyAndMap,
    ],
    arguments: [sizes],
  },
])
