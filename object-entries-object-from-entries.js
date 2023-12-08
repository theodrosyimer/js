/* eslint-disable no-unused-vars */
const object = { x: 42, y: 52 }

// Convert each key/value pair to an array into an array (`Object.entries()`),
const entries = Object.entries(object) // ?

for (const [key, value] of entries) {
  console.log(`The value of ${key} is ${value}.`)
}

// const object2 = { x: { test: 42 }, y: 52 }
// const entries2 = Object.entries(object2) // ?

// for (const [key, value] of entries2) {
//   console.log(`The value of ${key} is ${value}.`)
// }

// Convert the Map back into an object
const arrToObject = Object.fromEntries(entries) // ?

/*
We can use array methods and converting the result back to an new object `result` (`Object.fromEntries`)
*/
const object3 = { x: 42, y: 53, abc: 965 }

const result = Object.fromEntries(
  Object.entries(object3).filter(([key, value]) => key.length === 1)
) // ?

// Useful when dealing with json (from third-party API for example) to a map
const jsonData = {
  context: { coding: {}, writing: {} },
  action: ['create', 'collect', 'search', 'update', 'delete'],
}

// Convert the object into a map
const map = new Map(Object.entries(jsonData)) // ?

// Convert the map back into an object
const jsonDataCopy = Object.fromEntries(map) // ?
