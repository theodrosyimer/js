// import fs from 'fs/promises'
// import path from 'path'

let SET_WAIT_TO_FULLFILLED = true
let EXECUTION_COUNT = 0

console.log('\nHello from global scope 1!\n')

/**
 * @param {number} ms
 * @param {boolean} isFullfilled
 * @returns void
 */
async function wait(ms, isFullfilled) {
  return new Promise((resolve, reject) => {
    if (isFullfilled) {
      setTimeout(
        resolve(
          console.log(
            `\`wait\` Promise fullfilled ${++EXECUTION_COUNT} time${
              EXECUTION_COUNT > 1 ? 's' : ''
            }!`,
          ),
        ),
        ms,
      )
    } else {
      // if no error is thrown, the promise will return undefined!
      setTimeout(reject(new Error('Promise rejected!')), ms)
    }
  })
}

/**
 * @param {boolean} isFullfilled
 */
async function main(isFullfilled) {
  try {
    console.log('In `main()`: BEFORE calling `wait()`')
    wait(1000, isFullfilled)
    console.log('In `main()`: AFTER calling `wait()`')
    // return 'Hello from main()'
  } catch (err) {
    console.log(err)
    // return err
  }
}

// this will block the execution of the rest of the code
// await main(SET_WAIT_TO_FULLFILLED)

// not the same as this one below which will not block the execution of the rest of the code and fullfill the promise when the event loop is empty
main(SET_WAIT_TO_FULLFILLED)

console.log('\nHello from global scope 2!\n')

const promise1 = new Promise(async (resolve, reject) => {
  console.log('In `promise1()`: BEFORE calling `wait()`')
  await wait(1000, SET_WAIT_TO_FULLFILLED)
  // not the same as this one below which will not block the execution of the rest of the code and fullfill the promise when the event loop is empty
  // wait(1000, SET_WAIT_TO_FULLFILLED)

  console.log('In `promise1()`: AFTER calling `wait()`')
})

promise1.then(res => res).catch(err => err)

console.log('\nHello from global scope 3!\n')

// console.log('In global scope: BEFORE calling `wait()`')
// wait(1000, SET_WAIT_TO_FULLFILLED)
// console.log('In global scope: AFTER calling `wait()`')

const myPromiseAsFunctionReturn = s =>
  new Promise((resolve, reject) => {
    if (typeof s !== 'number') {
      reject(new Error('A number is required!'))
    }
    setTimeout(() => {
      resolve('hello from myPromiseAsFunctionReturn()')
    }, s * 1000)
  })

// const result = await myPromiseAsFunctionReturn('1').catch(err => {
//   console.log(err.message)
// })

// console.log(result)
