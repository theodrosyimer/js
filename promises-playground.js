import { promisify } from 'util'

const sleep = promisify(setTimeout)

const promise = new Promise((resolve, reject) => {
  // from global context so BEFORE the event loop started (synchronous)
  console.log('Promise')

  // this will queue the resolve callback in the microtask queue
  setTimeout(resolve('This is resolved asynchronously 1'), 1000)
})

async function foo() {
  // from global context so BEFORE the event loop started (synchronous)
  console.log('Async function')
  await sleep(1000)

  // this will queue the resolve callback in the microtask queue
  return 'This is resolved asynchronously 2'
}

// when the event loop reaches the microtask queue and the resolve callback is fullfilled, the value is passed to the `then` callback
promise.then(console.log)
foo().then(console.log)

// from global context so BEFORE the event loop started (synchronous)
console.log('Global context')
