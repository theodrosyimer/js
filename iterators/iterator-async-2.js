/* eslint-disable no-promise-executor-return */
/* eslint-disable no-unused-vars */

// * Custom Async Iterators
// *
// * source: Async Iterators: A new future for Streams - Stephen Belanger (01"14")
// * see: `generator-async-2.js` for a version using a generator

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function interval(ms) {
  const iterator = {
    async next() {
      await delay(ms)
      return {
        value: Date.now(),
        done: false,
      }
    },
  }

  const generator = {
    [Symbol.asyncIterator]() {
      return iterator
    },
  }
  return generator
}

// * Async iterators and generators are just an interface
