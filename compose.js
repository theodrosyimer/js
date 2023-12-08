export const compose = (...functions) =>
  functions.reduce(
    (acc, fn) =>
      (...args) =>
        acc(fn(...args)),
    x => x
  )

// Order of execution is reversed, same as composition, point-free style
export const pipeR =
  (...fns) =>
  param =>
    fns.reverse().reduce((result, fn) => fn(result), param)
