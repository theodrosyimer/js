// As a reminder, just to end my confusion about how to empty an array in JavaScript
const arrayA = [1, 2, 3, 4, 5]
// eslint-disable-next-line prefer-const

console.log(`Original Length: ${arrayA.length}`)

// this does NOT **actually** clear the array,
// it just overwrites the reference to the array with a new empty array
// ? but is it garbage collected? need to check
resetArrayByOverwriting(arrayA)
console.log(`After Overwriting: ${arrayA.length}`)

// this DOES **actually** clear the array by setting the length to 0
resetArrayBySettingLengthToZero(arrayA)
console.log(`After Using Length: ${arrayA.length}`)

function resetArrayByOverwriting(ar) {
  // eslint-disable-next-line no-param-reassign
  ar = []
}

function resetArrayBySettingLengthToZero(ar) {
  ar.length = 0
}

export {}
