// example of polyfilling
if (typeof globalThis.Intl === 'undefined') {
  Object.defineProperty(globalThis, 'Intl', {
    value: {
      // Our Intl implementation
    },
    enumerable: false,
    configurable: true,
    writable: true,
  })
}

// example of declaring a global variable
globalThis.myGlobal = 'foo'

// example of declaring a global function
globalThis.myGlobalFunction = () => {
  console.log('myGlobalFunction')
}

// example of declaring a global class
class MyClass {
  constructor() {
    console.log('MyClass')
  }
}
globalThis.MyClass = MyClass

// example of declaring a global object
globalThis.myGlobalObject = {
  foo: 'bar',
}

// example of declaring a global array
globalThis.myGlobalArray = [1, 2, 3]

// example of declaring a global symbol
globalThis.myGlobalSymbol = Symbol('myGlobalSymbol')

// q: example of declaring a global promise
// a: not possible

// example of declaring a global async function
globalThis.myGlobalAsyncFunction = async () => {
  console.log('myGlobalAsyncFunction')
}

// example of declaring a global generator function
globalThis.myGlobalGeneratorFunction = function* () {
  console.log('myGlobalGeneratorFunction')
}

// example of declaring a global generator object
globalThis.myGlobalGeneratorObject = myGlobalGeneratorFunction()

// example of declaring a global generator method
globalThis.myGlobalGeneratorMethod = function* () {
  console.log('myGlobalGeneratorMethod')
}

// example of declaring a global async generator function
globalThis.myGlobalAsyncGeneratorFunction = async function* () {
  console.log('myGlobalAsyncGeneratorFunction')
}

// example of declaring a global async generator object
globalThis.myGlobalAsyncGeneratorObject = myGlobalAsyncGeneratorFunction()

// example of declaring a global async generator method
globalThis.myGlobalAsyncGeneratorMethod = async function* () {
  console.log('myGlobalAsyncGeneratorMethod')
}
