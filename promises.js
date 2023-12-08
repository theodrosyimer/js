// import fs from 'fs/promises'
// import path from 'path'

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello from MyPromise()')
  }, 1000)
  setTimeout(() => {
    reject(new Error('Something went bad!'))
  }, 200)
})

myPromise.then(res => res).catch(err => err) // ?

const myPromiseAsFunctionReturn = s =>
  new Promise((resolve, reject) => {
    if (typeof s !== 'number') {
      reject(new Error('A number is required!'))
    }
    setTimeout(() => {
      resolve('hello from myPromiseAsFunctionReturn()')
    }, s * 1000)
  })

const result = await myPromiseAsFunctionReturn('1').catch(err => {
  console.log(err.message)
})

console.log(result)
