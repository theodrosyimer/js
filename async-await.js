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
function asyncFunctionMyPromise() {
  return myPromise
}

await asyncFunctionMyPromise().catch(e => {
  console.error(`Error: ${e.message}\n${e.stack}`)
})

async function asyncMyPromiseAsFunctionReturn() {
  return myPromise
}

await asyncMyPromiseAsFunctionReturn() // ?

function tryCatchAsync(fn) {
  return (...args) => fn(...args).catch(error => error)
}

tryCatchAsync(asyncFunctionMyPromise)() // ?

function asyncNewPromiseAsFunctionReturn(s) {
  return new Promise((resolve, reject) => {
    if (typeof s !== 'number') {
      reject(new Error('A number is required!'))
    }
    setTimeout(() => {
      resolve(console.log('hello from asyncNewPromiseAsFunctionReturn()'))
    }, s * 1000)
  })
}

await asyncNewPromiseAsFunctionReturn(2)
// c(1) // ?

function inspect(input) {
  return `${input}`
}

function asyncNewPromiseAsHighOrderFunction(fn) {
  return (parameter = '') =>
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
}

const inspectAsync = asyncNewPromiseAsHighOrderFunction(inspect)

inspectAsync('Hello').then(res => res) // ?
inspectAsync('stop') // ?

export {}
