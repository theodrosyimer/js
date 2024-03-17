// import fs from 'fs/promises'
// import path from 'path'

const SET_WAIT_TO_FULLFILLED = true
let EXECUTION_COUNT = 0

/**
 * @param {number} ms
 * @param {boolean} isFullfilled
 */
async function wait(ms, isFullfilled) {
  return new Promise((resolve, reject) => {
    if (isFullfilled) {
      setTimeout(
        resolve(
          console.log(
            `\`wait()\`: Promise fullfilled ${++EXECUTION_COUNT} time${
              EXECUTION_COUNT > 1 ? 's' : ''
            } in ${(ms / 1000).toFixed(3)}s!`,
          ),
        ),
        ms,
      )
    } else {
      // if no error is thrown, the promise will return undefined!
      setTimeout(reject(new Error('`wait()`: Promise rejected!')), ms)
    }
  })
}

/**
 * @param {boolean} isFullfilled
 */
async function MAIN(isFullfilled) {
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
await MAIN(SET_WAIT_TO_FULLFILLED)

// not the same as this one below which will not block the execution of the rest of the code and fullfill the promise when the event loop is empty
// main(SET_WAIT_TO_FULLFILLED)

console.log('\nHello from global scope 2!\n')

const promise1 = new Promise((resolve, reject) => {
  console.log('In `promise1()`: BEFORE calling `wait()`')
  wait(1000, SET_WAIT_TO_FULLFILLED).then(() => {
    // not the same as this one below which will not block the execution of the rest of the code and fullfill the promise when the event loop is empty
    // wait(1000, SET_WAIT_TO_FULLFILLED)

    console.log('In `promise1()`: AFTER calling `wait()`')
  })
})

promise1.then(res => res).catch(err => err)

console.log('\nHello from global scope 3!\n')

// console.log('In global scope: BEFORE calling `wait()`')
// wait(1000, SET_WAIT_TO_FULLFILLED)
// console.log('In global scope: AFTER calling `wait()`')

const myPromiseAsFn = s =>
  new Promise((resolve, reject) => {
    if (typeof s !== 'number') {
      reject(new Error('A number is required!'))
    }
    setTimeout(() => {
      resolve('hello from myPromiseAsFunctionReturn()')
    }, s * 1000)
  })

// const result = await myPromiseAsFn('1').catch(err => {
//   console.log(err.message)
// })

// console.log(result)
