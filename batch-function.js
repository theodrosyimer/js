function identity(value) {
  console.log(value)
  return value
}

function greet(name) {
  console.log(`Hello ${name}!`)
  return `Hello ${name}!`
}

const functions = [identity, greet]
const func = greet

function batchOneToMany(input, oneOrMoreFunction) {
  let fns = oneOrMoreFunction

  if (!Array.isArray(oneOrMoreFunction)) {
    fns = [oneOrMoreFunction]
  }

  fns.forEach(fn => fn(input))
}

function createBatchFunctionOneToMany(input, oneOrMoreFunction) {
  return () => batchOneToMany(input, oneOrMoreFunction)
}

batchOneToMany('Theo', functions)
const b = createBatchFunctionOneToMany('Theo', functions)
b()

batchOneToMany('Yetu', func)
const b2 = createBatchFunctionOneToMany('Yetu', func)
b2()

function batchManyToOne(inputList, action) {
  let items = inputList

  if (!Array.isArray(inputList)) {
    items = [inputList]
  }

  items.forEach(item => action(item))
}

function createBatchFunctionManyToOne(inputList, action) {
  return () => batchManyToOne(inputList, action)
}

batchManyToOne(['Antoine', 'Izaïah'], identity)
const b3 = createBatchFunctionManyToOne('Theo', identity)
b3()

export function batchCreateElement(elements, createElement) {
  const createdElements = []

  elements.forEach(element => createdElements.push(createElement(element)))

  return createdElements
}
