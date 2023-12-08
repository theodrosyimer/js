/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable babel/no-unused-expressions */

// Convert an array into an object...
const arr1 = ['test', 'henri', 'theo', 'maison']

// Using the spread operator, better to avoid it if performance is an issue: expensive operation
const object = { ...arr1 }
object // ?

// from: https://dev.to/afewminutesofcode/how-to-convert-an-array-into-an-object-in-javascript-25a4#:~:text=/%20Even%20concise%0Aconst%20convertArrayToObject%20%3D%20(array%2C%20key)%20%3D%3E%20%0A%20%20array.reduce((acc%2C%20curr)%20%3D%3E(acc%5Bitem%5Bkey%5D%5D%20%3D%20item%2C%20acc)%2C%20%7B%7D)%3B%0A//%20Basically%20everything%20inside

const convertArrayToObject = (array, key) =>
  array.reduce((obj, item) => {
    obj[item[key]] = item
    return obj
  }, {})

// Even concise
// Basically everything inside parentheses will be evaluated, only the last value used will be only returned. In this way, you avoid the spread op which is a way expensive operation than a single assignment
const convertArrayToObject2 = (array, key) =>
  // eslint-disable-next-line no-sequences
  array.reduce((obj, item) => ((obj[item[key]] = item), obj), {})

const convertArrayToObjectWithIndexesAsKeys = array => {
  // make a guard against memory overload
  if (array.length > 100) {
    return false
  }
  return array.reduce((obj, item, key) => ({ ...obj, [item]: key }), {})
}

// ...And make a query
const getProp1 = prop => () => convertArrayToObjectWithIndexesAsKeys(arr1)[prop]
const exist1 = s => s() ?? false
// composing `get` from `getProp1` and `exist1`
const get1 = query => exist1(getProp1(query))
get1('henri') // ?
get1('henr') // ?
get1('test') // ?
get1('tst') // ?

const convertArrayToObjectWithCustomKeys = array => {
  // make a guard against memory overload
  if (array.length > 100) {
    return false
  }
  return array.reduce((obj, item, key) => ({ ...obj, [item]: key }), {})
}

// ...And make a query
const getProp2 = prop => () => convertArrayToObjectWithCustomKeys(arr1)[prop]
const exist2 = s => s() ?? false
// composing `get` from `getProp2` and `exist2`
const get2 = query => exist2(getProp2(query))
get2('henri') // ?
get2('henr') // ?
get2('test') // ?
get2('tst') // ?

// from:[Javascript Array to Object: How to convert an array of objects into an object in javascript based on a key - DEV Community](https://dev.to/afewminutesofcode/how-to-convert-an-array-into-an-object-in-javascript-25a4)

const arr2 = [
  { id: 111, name: 'John', age: 29 },
  { id: 112, name: 'Sarah', age: 25 },
  { id: 122, name: 'Kate', age: 22 },
  { id: 123, name: 'Tom', age: 21 },
  { id: 125, name: 'Emma', age: 24 },
]

const convertArrayOfObjectsToObjectBasedOnExistingValue = (array, key) =>
  array.reduce(
    (obj, item) => ({
      ...obj,
      [item[key]]: item,
    }),
    {}
  )

convertArrayOfObjectsToObjectBasedOnExistingValue(arr2, 'id') // ?
