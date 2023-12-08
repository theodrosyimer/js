// from: [Have fun w/ D. Crockford - YouTube](https://www.youtube.com/watch?v=Aa_OWn03mDo)

/*
Binary function takes two number as input
*/
const add = (x, y) => x + y

const mul = (x, y) => x * y

const sub = (x, y) => x - y

const square = x => x * x

/*
Unary function that takes one argument and returns a function that returns that argument
*/

const identityf = x => () => x

const idOf2 = identityf(2)
idOf2() // ?

/*
function that adds from two invocations
really nice to compose functions functionalities, from smaller functions, in a modular way
*/
const addf = x => y => x + y

const add5 = addf(5)
add5(4) // ?

/*
High-Order Function (function that receives  and return function)
*/

/*
Currying Explanation: `curry` takes a binary function and returns a unary function that returns a unary function.
*/
const curry = binary => x => y => binary(x, y)

const add9 = curry(add)(9)
add9(1) // ?

const add3 = curry(add)(3)
add3(4) // ?

const mul5 = curry(mul)(5)
mul5(6) // ?

// High-Order function using 'curry()'
const hofn = binary => curry(binary)

const mul2 = hofn(mul)(2)
mul2(3) // ?

/*
Partial Application Explanation: `partial` takes a binary function and a value and produces a unary function.
*/
const partial = (binary, x) => y => binary(x, y)

const add4 = partial(add, 4)
add4(4) // ?

/*
Partial Application but with multiple functions taking multiple arguments (arrays)!
*/
const partial2 =
  (binary, ...x) =>
  (...y) =>
    binary(...x, ...y)

/*
Creating functions that takes an array of arguments and process them with single and different operation (same operations as binary functions from the start)
*/
const addAll = (...args) => {
  const total = args.reduce((sum, value) => sum + value, 0)
  return total
}

const multAll = (...args) => {
  const total = args.reduce((sum, value) => sum * value, 0)
  return total
}

const subAll = (...args) => {
  const total = args.reduce((sum, value) => sum - value, 0)
  return total
}

partial2(addAll, 3, 3)(3, 3) // ?
partial2(multAll, 2, 2)(2, 2) // ?
partial2(subAll, 100, 20)(10, 5) // ?

/*
3 ways to Increment by 1 without writing new functions
*/

let incr = addf(1) // ?
incr(1) // ?

incr = curry(add)(1) // ?
incr(3) // ?

incr = partial(add, 1) // ?
incr(4) // ?

/*
Function 'twice' that takes a binary function returns an unary function that passes its arguments to the binary function twice
*/

const twice = binary => a => binary(a, a)

const doubl = twice(add)

doubl(12) // ?

/*
Function that reverses the arguments of the binary function
*/
let reverse = binary => (x, y) => binary(y, x)

// OR better yet, using the spread operator
reverse =
  binary =>
  (...args) =>
    binary(...args.reverse())

const bus = reverse(sub)

bus(3, 2) // ?

/*
Function 'composeu' that takes two unary functions as arguments and returns an unary function that calls them both
*/
const composeu = (fn2, fn1) => x => fn2(fn1(x))

const sqrDoubl = composeu(doubl, square)
sqrDoubl(5) // ?

/*
Function 'composeb' that takes two binary functions as arguments and returns a ternary function that calls them both
*/
const composeb = (fn2, fn1) => (x, y, z) => fn2(fn1(x, y), z)

const multAdd = composeb(add, mul)
multAdd(2, 3, 7) // ?

/*
Function 'limit' that allows a binary function to be called a limited number of times
each closure have its state saved in memory, so we can keep track of the 'count' argument
*/
/* eslint-disable */
const limit = (binary, count) => (x, y) => {
  if (count >= 1) {
    count -= 1 //?
    return binary(x, y)
  }
  return undefined
}

let addLtd = limit(add, 3)
addLtd(3, 4) // ?
addLtd(3, 41) // ?
addLtd(7, 1) // ?
addLtd(6, 9) // ?
