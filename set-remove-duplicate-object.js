const o = {
  name: 'gentilly',
  lat: 48,
  lon: 33,
}

const o1 = {
  name: 'gentilly',
  lat: 48,
  lon: 33,
}

const object2 = {
  name: 'paris',
  lat: 47,
  lon: 32,
}

const set = new Set(
  Object.entries(o),
  Object.entries(o1),
  Object.entries(object2),
)

Object.fromEntries(set) // ?

// function removeDuplicatesObjects(...objects) {
//   const myMap = new Map()
//   const lastObjectMap = new Map(Object.entries(objects.pop()))
//   objects.forEach(object => {
//     myMap.set(Object.entries(object))
//     for (const [key, value] of myMap.entries()) {
//       if (lastObjectMap.get(key)) {
//         myMap
//       }
//     }
//   })
//   // const result = Object.fromEntries(
//   //   Object.entries(object3).filter(([key, value]) => key.length === 1)
//   // ) // ?
// }

// removeDuplicatesObjects(o, o1, object2) // ?
