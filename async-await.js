/* eslint-disable prettier/prettier */
// ! It is NOT a function!!!
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello from MyPromise()')
  }, 1000)
  setTimeout(() => {
    reject(new Error('Something went bad!'))
  }, 1500)
})

// ! ...NOW, it is a function (by wraping it in async function)
const asyncFunctionMyPromise = () => myPromise

await asyncFunctionMyPromise().catch(e => {
  console.error(`Error: ${e.message}\n${e.stack}`)
})

const asyncMyPromiseAsFunctionReturn = () => myPromise
await asyncMyPromiseAsFunctionReturn() // ?

const tryCatchAsync =
  fn =>
    (...args) =>
      fn(...args).catch(error => error)

tryCatchAsync(asyncFunctionMyPromise)() // ?

const asyncNewPromiseAsFunctionReturn = s =>
  new Promise((resolve, reject) => {
    if (typeof s !== 'number') {
      reject(new Error('A number is required!'))
    }
    setTimeout(() => {
      resolve(console.log('hello from asyncNewPromiseAsFunctionReturn()'))
    }, s * 1000)
  })

await asyncNewPromiseAsFunctionReturn(2)
// c(1) // ?

const inspect = input => `${input}`

const asyncNewPromiseAsHighOrderFunction =
  fn =>
    (parameter = '') =>
      new Promise((resolve, reject) => {
        // eslint-disable-next-line babel/valid-typeof
        // eslint-disable-next-line eqeqeq
        if (parameter === 'stop') {
          reject(new Error('You stopped the inspection!'))
        }
        setTimeout(() => {
          resolve(fn(parameter))
        }, 1500)
      })

const inspectAsync = asyncNewPromiseAsHighOrderFunction(inspect)
inspectAsync('Hello').then(res => res) // ?
inspectAsync('stop') // ?

export {}
