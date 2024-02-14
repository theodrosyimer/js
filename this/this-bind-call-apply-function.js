/* eslint-disable babel/no-invalid-this */
function f(...args) {
  return { name: this?.name, age: this?.age, address: this?.address, args }
}

const o = {
  name: 'Theo',
  age: 38,
  address: 'Paris',
}

// using `bind()`, a bound function is returned same as `f()` where the `this` object is associated to the `o` object
const g = f.bind(o)
g()

// using `call()`, `f()` is called immediately
f.call(o, 'test', 'Theo')

// This function is almost identical to `call()`, except that the function arguments are passed to `call()` individually as a list, while for `apply()` they are combined in one object, typically an array — for example, `f.call(this, 'test', 'Theo')` vs. `f.apply(this, ['test', 'Theo'])`.
f.apply(o, ['test', 'Theo'])

/* But it does NOT work with arrow functions */
// `this` in arrow function is lexically bound to the enclosing execution context's `this` value (also called lexical context),
//  meaning that it is not affected by`call()`, `apply()` or`bind()`.
const arrowFn = () => this
arrowFn.call(o)
arrowFn.apply(o)

const arrowFn2 = () => ({
  name: this?.name,
  age: this?.age,
  address: this?.address,
})

arrowFn2.call(o)
arrowFn2.apply(o)

const g3 = arrowFn2.bind(o)
g3()
