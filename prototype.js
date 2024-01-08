// `.prototype` is a property of a function (so classes too)

// .__proto__ === [[Prototype]] (a hidden property in objects)
// VS
// `.prototype` (a hidden property in functions)

class Alpha { log() { console.log('Hello') } }
console.log(typeof Alpha);
console.log(typeof Alpha.prototype);
console.log(typeof Alpha.prototype.log);

//////////////////////////////////////////////

let created
class Example {
  constructor(message) {
    this.message = message
    created = this
  }
  log() {
    console.log(this.message)
  }
}

const instance = new Example('Hello')
console.log(instance === created)
console.log(Object.keys(instance));
console.log(typeof instance.log);
console.log(typeof Example.prototype.log)
console.log(instance.__proto__ === Example.prototype)
console.log(typeof instance.__proto__.log)

// when the `new` keyword is used to create a class, 3 things happen:
// 1. a new instance of the class is created
// 2. `this` is set to the new instance (here `instance`)
// 3. when assigning an new instance to a variable, the variable's `.__proto__` object is set to the class `prototype` property (`instance.__proto__ === Example.prototype`)

//////////////////////////////////////////////

function Func() {}
const func = new Func()
console.log(func.__proto__ === Func.prototype)

class Cls {}
const cls = new Cls()
console.log(cls.__proto__ === Cls.prototype)

const str = 'abc'
console.log(str.__proto__ === String.prototype)

const num = 123.456
console.log(num.__proto__ === Number.prototype)

console.log(typeof Number.prototype.toPrecision)
console.log(typeof num.__proto__.toPrecision)
console.log(num.toPrecision(2))
