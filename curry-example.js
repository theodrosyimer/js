// source: [How to Curry Functions | An Advanced Javascript Tutorial on Currying - (Youtube)](https://www.youtube.com/watch?v=I4MebkHvj8g&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=5&ab_channel=DaveGray)
const curry = (fn) => {
  let curried
  return (curried = (...args) => {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args)
    }
    return fn(...args)
  })
}

// example
const total = (x, y, z) => x + y + z
const curriedTotal = curry(total)
