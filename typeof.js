/* eslint-disable no-new-wrappers */
/* eslint-disable babel/no-unused-expressions */
/* eslint-disable no-unused-expressions */
// Numbers
typeof 37 === 'number' // ?
typeof 3.14 === 'number' // ?
typeof 42 === 'number' // ?
typeof Math.LN2 === 'number' // ?
typeof Infinity === 'number' // ?
// Despite being "Not-A-Number"
typeof NaN === 'number' // ?
// Number tries to parse things into numbers
typeof Number('1') === 'number'

// Strings
typeof '' === 'string' // ?
typeof 'bla' === 'string' // ?
typeof `template literal` === 'string' // ?
// note that a number within a string is still typeof string
typeof '1' === 'string' // ?
// typeof always returns a string
typeof typeof 1 === 'string' // ?
// String converts anything into a string, safer than toString
typeof String(1) === 'string' // ?

// Booleans
typeof true === 'boolean' // ?
typeof false === 'boolean' // ?
// Boolean() will convert values based on if they're truthy or falsy
typeof Boolean(1) === 'boolean' // ?
// two calls of the ! (logical NOT) operator are equivalent to Boolean()
typeof !!1 === 'boolean' // ?

// Symbols
// eslint-disable-next-line symbol-description
typeof Symbol() === 'symbol' // ?
typeof Symbol('foo') === 'symbol' // ?
typeof Symbol.iterator === 'symbol' // ?

// Undefined
typeof undefined === 'undefined' // ?
typeof declaredButUndefinedVariable === 'undefined' // ?
typeof undeclaredVariable === 'undefined' // ?

// Objects
typeof { a: 1 } === 'object' // ?

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === 'object' // ?
Array.isArray([1, 2, 3]) // ?
Object.prototype.toString.call([1, 2, 3]) // ?

typeof new Date() === 'object' // ?
// See Regular expressions section for historical results
typeof /regex/ === 'object' // ?

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === 'object' // ?
typeof new Number(1) === 'object' // ?
typeof new String('abc') === 'object' // ?

// Functions
// eslint-disable-next-line func-names
typeof function() {} === 'function' // ?
typeof class C {} === 'function' // ?
typeof Math.sin === 'function' // ?
