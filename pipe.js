/* eslint-disable no-unused-vars */
// only handle synchronous functions
const pipe =
  (...fns) =>
  param =>
    fns.reduce((result, fn) => fn(result), param)

// Handle asynchronous AND synchronous functions
const pipeP =
  (...fns) =>
  param =>
    fns.reduce((result, fn) => (result.then && result.then(fn)) || fn(result), param)

// Order of execution is reversed, same as composition, point-free style
const pipeR =
  (...fns) =>
  param =>
    fns.reverse().reduce((result, fn) => fn(result), param)
