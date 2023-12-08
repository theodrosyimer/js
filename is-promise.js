// inspiration: [Check if a Value is a Promise using JavaScript | bobbyhadz](https://bobbyhadz.com/blog/javascript-check-if-value-is-promise)

/* eslint-disable no-empty-function */
const isPromise = p => {
  if (
    p !== null &&
    typeof p === 'object' &&
    typeof p.then === 'function' &&
    typeof p.catch === 'function'
  ) {
    return true
  }

  return false
}

const returnsPromise = fn => {
  if (
    fn.constructor.name === 'AsyncFunction' ||
    (typeof fn === 'function' && isPromise(fn()))
  ) {
    console.log('✅ Function returns promise')
    return true
  }

  console.log('⛔️ Function does NOT return promise')
  return false
}

// 👇️ Examples
const exampleAsync = async () => {}
const example = () => {}
const examplePromise = () =>
  new Promise(resolve => {
    resolve(42)
  })

console.log(returnsPromise(exampleAsync)) // 👉️ true
console.log(returnsPromise(example)) // 👉️ false
console.log(returnsPromise(examplePromise)) // 👉️ true
