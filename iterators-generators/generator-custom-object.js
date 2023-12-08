// Custom object with a generator implemented
const obj = {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator]() {
    for (const key of Object.keys(this)) yield this[key]
  },
}

const array = [...obj] // ?

array.filter(key => key > 1) // ?

// If a generator is NOT needed, use any of the following methods
/* eslint-disable-next-line */
const arr = Object.entries(obj) // ?
/* eslint-disable-next-line */
const arr2 = Object.keys(obj) // ?
/* eslint-disable-next-line */
const arr3 = Object.values(obj) // ?

// Function that makes an object iterable
function* makeGenerator(iterable) {
  for (const element of iterable) {
    yield element
  }
}

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator]() {
    for (const key of Object.keys(this)) yield this[key]
  },
}

const obj2Iterator = makeGenerator(obj2) // ?

obj2Iterator.next() // ?

export {}
