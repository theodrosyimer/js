// The `in` operator returns true if the specified property is in the **specified object** or **its prototype chain**.
function Person(age) {
  this.age = age
}

Person.prototype.name = 'John'

const p1 = new Person(34)
console.log('age' in p1)
console.log('name' in p1)

// The `hasOwnProperty()` method returns a boolean indicating whether the object has the **specified property** as **its own property** (as opposed to inheriting it).
console.log(p1.hasOwnProperty('age'))
console.log(p1.hasOwnProperty('name'))

// but in some cases it is not safe and will cause the program to fail.
const obj = Object.create(null)
obj.a = 1
console.log('a' in obj)
// console.log(obj.hasOwnProperty('a')) // obj.hasOwnProperty is not a function

// const obj2 = Object.create(null).hasOwnProperty('a') // obj.hasOwnProperty is not a function

// with Object.hasOwn we can avoid these problems and safely check if an object has a property.
let obj3 = Object.create(null)
console.log(obj3)
obj3.a = 1
console.log(Object.hasOwn(obj3, 'a')) // this is safe
