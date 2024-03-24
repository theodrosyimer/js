/* eslint-disable no-unused-vars */
function myLength(string) {
  let i = 0
  while (string[i] !== undefined) {
    i++
  }
  return i
}

function myPush(tab, val) {
  const leng = myLength(tab)
  tab[leng] = val
  return tab
}

function myLength2(stringOrArray) {
  let i = 0
  for (const item of stringOrArray) {
    i++
  }
  return i
}

function myPush2(tab, val) {
  const leng = myLength2(tab)
  tab[leng] = val
  return tab
}

const array1 = ['hello', undefined, 2, null, {}]
const array1Copy = ['hello', undefined, 2, null, {}]

const array2 = ['hello', 2, undefined, null, {}]
const array2Copy = ['hello', 2, undefined, null, {}]
const array3 = ['hello', 2, null, undefined, {}]

console.log('myLength v1: increment counter ONLY if an item is NOT `undefined`')
console.log()

myLength(array1) // ?
myLength(array2) // ?
myLength(array3) // ?

myPush(array1, 'world') // ?
myPush(array2, 'world') // ?

console.log()
console.log(
  'myLength v2: increment counter no matter the value of the element on the current iteration',
)
console.log()

myLength2(array1) // ?
myLength2(array2) // ?
myLength2(array3) // ?

myPush2(array1Copy, 'world') // ?
myPush2(array2Copy, 'world') // ?
