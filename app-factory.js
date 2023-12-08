const options = {
  name: 'Paul',
  age: '26',
  // if `this` is needed use this shorthand syntax...
  prop(name, age) {
    return `I'm ${name || this.name} and I'm ${age || this.age} years old`
  },
  // ...otherwise, use this syntax to use arrow functions
  prop2: (name = 'Theo', age = 40) => `I'm ${name} and I'm ${age} years old and you?`,
}

// @ts-ignore
const appFactory =
  object =>
  (methodName, ...args) => {
    if (methodName == null)
      return 'You need to provide an existing method name from your object'

    if (!args.length) {
      return object[methodName]()
    }
    return object[methodName](...args)
  }

const app = appFactory(options)

app() // ?
app(null) // ?
app(undefined) // ?
app('prop') // ?
app('prop', 'Yetu') // ?
app('prop', 'Yetu', 36) // ?
app('prop2') // ?
app('prop2', 'Arthur') // ?
app('prop2', 'Arthur', 37) // ?

// ///////////////////////////////////////

// Using a curried version

// ///////////////////////////////////////
// @ts-ignore
const appFactory2 =
  object =>
  methodName =>
  (...args) => {
    if (methodName == null)
      return 'You need to provide an existing method name from your object'

    if (!args.length) {
      return object[methodName]()
    }
    return object[methodName](...args)
  }

const app2 = appFactory2(options)

app2()() // ?
app2(null)() // ?
app2(undefined)() // ?
app2('prop')() // ?
app2('prop')('Yetu') // ?
app2('prop')('Yetu', 36) // ?
app2('prop2')() // ?
app2('prop2')('Arthur') // ?
app2('prop2')('Arthur', 37) // ?
