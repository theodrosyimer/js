function* main() {
  // An array containing duplicate data
  const arr = [1, 2, 2, 3, 3, 1]

  for (let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}

// combining with a spread operator
// eslint-disable-next-line no-unused-vars
const gen = [...main()] // ?

for (const item of main()) {
  console.log(item)
}

// possible to convert any iterable object to a 'Set', here an example with a generator
const mySet = new Set([...main()]) // ?

mySet.forEach(value => {
  console.log(value)
})

const valueIterator = mySet.values()

valueIterator.next() // ?
valueIterator.next() // ?
valueIterator.next() // ?
valueIterator.next() // ?

export {}
