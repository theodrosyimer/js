/*
check: [Infinite Data Structures: To Infinity & Beyond! - Computerphile - (Youtube)](https://www.youtube.com/watch?v=bnRNiE_OVWA)
*/
/**
 *
 * @param {number} number
 * @returns
 */
const factors = number => [...Array(number + 1).keys()].filter(i => number % i === 0)
// factors(1256200) // ?

const isPrime = number => {
  const r = factors(number)
  if (r.length === 2) {
    return true
  }
  return false
}

factors(7) // ?
isPrime(1) === false // ?
isPrime(2) === true // ?
isPrime(3) === true // ?
isPrime(4) === false // ?
isPrime(5) === true // ?
isPrime(6) === false // ?
isPrime(7) === true // ?
isPrime(8) === false // ?
isPrime(9) === false // ?
isPrime(10) === false // ?
isPrime(11) === true // ?
isPrime(12) === false // ?
isPrime(13) === true // ?
isPrime(14) === false // ?
isPrime(15) === false // ?
isPrime(16) === false // ?
isPrime(17) === true // ?
isPrime(18) === false // ?
isPrime(19) === true // ?
isPrime(20) === false // ?
isPrime(21) === false // ?
isPrime(22) === false // ?


//////////////////////////////////////////////////////////////////////////////////////////

/**
 * `isPrime` checks if a given number `n` is a prime number
 *
 * Using a for loop (imperative style)
 * @param {number} n
 * @returns {boolean} boolean
 */
function isPrime2(n) {
  if (n < 2) return false
  let result = []

  for(let index = 1; index <= n; index++) {
    if (n % index === 0) {
      result.push(index)
    }
    if (result.length > 2) return false
  }
  return true
}

isPrime2(1) === false // ?
isPrime2(2) === true // ?
isPrime2(3) === true // ?
isPrime2(4) === false // ?
isPrime2(5) === true // ?
isPrime2(6) === false // ?
isPrime2(7) === true // ?
isPrime2(8) === false // ?
isPrime2(9) === false // ?
isPrime2(10) === false // ?
isPrime2(11) === true // ?
isPrime2(12) === false // ?
isPrime2(13) === true // ?
isPrime2(14) === false // ?
isPrime2(15) === false // ?
isPrime2(16) === false // ?
isPrime2(17) === true // ?
isPrime2(18) === false // ?
isPrime2(19) === true // ?
isPrime2(20) === false // ?
isPrime2(21) === false // ?
isPrime2(22) === false // ?

//////////////////////////////////////////////////////////////////////////////////////////

//
