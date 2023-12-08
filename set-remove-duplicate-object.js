let o = {
  name: 'gentilly',
  lat: 48,
  lon: 33
}

let o1 = {
  name: 'gentilly',
  lat: 48,
  lon: 33
}

let o2 = {
  name: 'paris',
  lat: 47,
  lon: 32
}

// let set = new Set(Object.entries(o), Object.entries(o1), Object.entries(o2))

// Object.fromEntries(set)   // ?

function removeDuplicatesObjects(...objects) {
  let myMap = new Map()
  let lastObjectMap = new Map(Object.entries(objects.pop()))
  objects.forEach(object => {
    myMap.set(Object.entries(object))
    for (const [key, value] of myMap.entries()) {
      if (lastObjectMap.get(key)) {
        myMap
      }
    }
  })
  // const result = Object.fromEntries(
  //   Object.entries(object3).filter(([key, value]) => key.length === 1)
  // ) // ?
}

removeDuplicatesObjects(o, o1, o2) // ?
