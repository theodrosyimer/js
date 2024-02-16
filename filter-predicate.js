const array = [0, 1, 2, null, 4, undefined, 5, false, '', true]

// use it like this:
filter(array, value => value && typeof value !== 'boolean')

// or:
function filterNullAndUndefined(arr) {
  return filter(arr, value => value !== null && value !== undefined)
}

function filter(arr, predicateFn) {
  const newArr = []

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    if (predicateFn(element)) {
      newArr.push(element)
    }
  }
  return newArr
}

// /////////////////////////////////////////////////////////

// Functional programming style

const animals = [
  { name: 'Fluffykins', species: 'rabbit', legs: 4, mammal: true },
  { name: 'Caro', species: 'dog', legs: 4, mammal: true },
  { name: 'Harold', species: 'fish', legs: 0, mammal: false },
  { name: 'Ursula', species: 'cat', legs: 4, mammal: true },
  { name: 'Jimmy', species: 'fish', legs: 0, mammal: false },
]

const isMammal = animal => animal.mammal

const filterAnimals = createFilter(animals)

filterAnimals(isMammal)

function createFilter(arr) {
  return predicateFn => {
    const newArr = []
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index]
      if (predicateFn(element)) {
        newArr.push(element)
      }
    }
    return newArr
  }
}
