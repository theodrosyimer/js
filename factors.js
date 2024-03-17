/*
[from:](https://stackoverflow.com/a/43802308)

see also: [Infinite Data Structures: To Infinity & Beyond! - Computerphile - (Youtube)](https://www.youtube.com/watch?v=bnRNiE_OVWA)
*/

/*
**Array(number)** creates an empty array of [number] places

**Array.from(arr, (_, i) => i)** populates the empty array with values according to position [0,1,2,3,4,5,6,7,8,9]

**.filter(i => ...)** filters the populated [0,1,2,3,4,5] array to the elements which satisfy the condition of number % i === 0 which leaves only the numbers that are the factors of the original number.

Note that you can go just until Math.floor(number/2) for efficiency purposes if you deal with big numbers (or small).

As @gengns suggested in the comments a simpler way to generate the array would be to use the spread operator and the keys method:
*/

const factors1 = number =>
  [...Array(number + 1).keys()].filter(i => number % i === 0)

factors1(36) // ?

// ES6 version
const factors2 = number =>
  Array.from({ length: number + 1 }, (_, i) => i).filter(i => number % i === 0)

console.log(factors2(36))

// Best
const factors1Refactored = number =>
  [...Array(number + 1)].map((_, i) => i).filter(i => number % i === 0)

factors1Refactored(36) // ?

// ////////////////////////////////////////////////////////////////////////////////////////

// Using a for loop (imperative style)
function factorsL(n) {
  const result = []
  for (let index = 1; index <= n; index++) {
    if (n % index === 0) {
      result.push(index)
    }
  }
  return result
}
