/* eslint-disable no-proto */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

// `.prototype` is a property of a function (so classes too)

// .__proto__ === [[Prototype]] (a hidden property in objects)
// VS
// `.prototype` (a hidden property in functions)

class Alpha {
  log() {
    console.log('Hello')
  }
}
console.log('[Alpah]', typeof Alpha)
console.log('[Alpah.prototype]', typeof Alpha.prototype)
console.log('[Alpah.prototype.log]', typeof Alpha.prototype.log)

// ////////////////////////////////////////////

let created
class Example {
  constructor(message) {
    this.message = message
    created = this
  }

  log() {
    console.log('[Example message]:', this.message)
  }
}

const instance = new Example('Hello')
console.log('[instance === created]:', instance === created)
console.log('[Object.keys(instance)],', Object.keys(instance))
console.log('[typeof instance.log],', typeof instance.log)
console.log('[typeof Example.prototype.log],', typeof Example.prototype.log)
console.log(
  '[instance.__proto__ === Example.prototype],',
  instance.__proto__ === Example.prototype,
)
console.log('[typeof instance.__proto__.log],', typeof instance.__proto__.log)

// when the `new` keyword is used to create a class, 3 things happen:
// 1. a new instance of the class is created
// 2. `this` is set to the new instance (here `instance`)
// 3. when assigning an new instance to a variable, the variable's `.__proto__` object is set to the class `prototype` property (`instance.__proto__ === Example.prototype`)

// ////////////////////////////////////////////

function Func() {
  return {}
}
const func = new Func()
console.log(
  '[func.__proto__ === Func.prototype]:',
  func.__proto__ === Func.prototype,
)
console.log(
  '[Object.getPrototypeOf(func) === Func.prototype]:',
  Object.getPrototypeOf(func) === Func.prototype,
)

class Cls {}
const cls = new Cls()
console.log(
  '[cls.__proto__ === Cls.prototype]:',
  cls.__proto__ === Cls.prototype,
)
console.log(
  '[Object.getPrototypeOf(cls) === Cls.prototype]:',
  Object.getPrototypeOf(cls) === Cls.prototype,
)

const str = 'abc'
console.log(
  '[str.__proto__ === String.prototype]:',
  str.__proto__ === String.prototype,
)
console.log(
  '[Object.getPrototypeOf(str) === String.prototype]:',
  Object.getPrototypeOf(str) === String.prototype,
)

const num = 123.456
console.log(
  '[num.__proto__ === Number.prototype]:',
  num.__proto__ === Number.prototype,
)
console.log(
  '[Object.getPrototypeOf(num) === Number.prototype]:',
  Object.getPrototypeOf(num) === Number.prototype,
)

console.log(
  '[typeof Number.prototype.toPrecision]:',
  typeof Number.prototype.toPrecision,
)
console.log(
  '[typeof num.__proto__.toPrecision]:',
  typeof num.__proto__.toPrecision,
)
console.log(
  '[typeof Object.getPrototypeOf(num).toPrecision]:',
  typeof Object.getPrototypeOf(num).toPrecision,
)
console.log('[num.toPrecision(2)]:', num.toPrecision(2))
