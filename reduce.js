/*
Need to be careful with the reduce function because it can be used to create a new array or a new object on each iteration making it dangerous for memory usage if not careful when using spread operator or object assign.
*/

// OBJECTS
const persons = [
  { id: 1, name: 'Alice', age: 21 },
  { id: 2, name: 'Max', age: 20 },
  { id: 3, name: 'Jane', age: 20 },
]

// this is bad because it creates a new object on each iteration
const ob = persons.reduce(
  (acc, person) => ({ ...acc, [person.id]: person }),
  {}
) //?.
ob

// this is good because it only creates a new object once (initialValue)
const ob2 = persons.reduce((hashTable, person) => {
  hashTable[person.id] = person
  return hashTable
}, {}) //?.
ob2

// ARRAYS
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// this is bad because it creates a new array on each iteration
const arr = numbers.reduce((acc, num) => [...acc, num * 2], []) //?.
arr

// this is good because it only creates a new array once (initialValue)
const arr2 = numbers.reduce((acc, num) => {
  acc.push(num * 2)
  return acc
}, []) //?.
arr2
