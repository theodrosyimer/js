// As a reminder, just to end my confusion about how to empty an array in JavaScript
let arrayA = [1, 2, 3, 4, 5]

console.log('Original Length: ' + arrayA.length)

// this does NOT **actually** clear the array,
// it just overwrites the reference to the array with a new empty array
clearByOverwriting(arrayA)
console.log('After Overwriting: ' + arrayA.length)

// this DOES **actually** clear the array by setting the length to 0
clearUsingLength(arrayA)
console.log('After Using Length: ' + arrayA.length)

function clearByOverwriting(ar) {
  ar = []
}

function clearUsingLength(ar) {
  ar.length = 0
}
