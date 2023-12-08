/**
 * @template T
 * @param {number} count - number of times to prompt
 * @param { (...args: any) => any } fn - the function to call
 */
function executeFnXTimes(count, fn) {
  /**
   * @template T
   * @param {T} param Some parameter
   */
  return param => {
    for (let i = 0; i < count; i++) {
      fn(param)
    }
  }
}

// * works for both cases below

// using an inline callback
const greet3Times2 = executeFnXTimes(3, param => param.toUpperCase()) // ?
greet3Times2('Hello World') // ?

// passing the function to execute as an argument
const greet3Times3 = executeFnXTimes(3, greet) // ?
greet3Times3('Hello World') // ?

function greet(param) {
  return param.toLowerCase()
}
