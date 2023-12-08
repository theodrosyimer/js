/* eslint-disable prefer-spread */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */

export function timeIt(fn, ...args) {
  if (!fn || !(fn instanceof Function))
    throw new Error('No function was given to execute')

  let start = 0
  let duration = 0

  start = performance.now()
  fn.apply(null, args) // ?
  duration = performance.now() - start

  return {
    name: `${fn.name}`,
    executionTime: `${duration}ms`,
  }
}

// export const timeIt = (label, fn) => {
//   console.time(label)
//   fn()
//   console.timeEnd(label)
// }
