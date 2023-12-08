const log = value => {
  const coloredType = `%c ${value}: `

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return console.table(Array.of([]))
    }
  }

  switch (getTypeName(value)) {
    case 'string':
      console.log(`${coloredType}`, 'color: yellow; font-weight: bold;', value)
      break

    case 'object':
      console.log(value)

      // console.table(`${value}`, {"n1": 23, "n2": {"n3": 97}})
      // .dir(`${value}`, {"n1": 23, "n2": {"n3": 97}})
      break

    case 'array':
      // console.table(`${coloredType}`, 'color: yellow; font-weight: bold;', value)

      console.table(value)
      // .dir(`${value}`, {"n1": 23, "n2": {"n3": 97}})
      break

    default:
      console.log('default')
  }
}

const object = { count: 1, read: 2, phrase: 'hello world' }
const array = ['world', 'ok', 'hello', 2, '3']

log('hello')
log(array)
log(object)

function getTypeName(value) {
  if (typeof value === 'string') {
    return 'string'
  }
  if (typeof value === 'number') {
    return 'number'
  }
  if (value === null) {
    return 'null'
  }
  if (typeof value === 'undefined') {
    return 'undefined'
  }
  if (typeof value === 'boolean') {
    return 'boolean'
  }
  if (typeof value === 'bigint') {
    return 'bigint'
  }
  if (typeof value === 'symbol') {
    return 'symbol'
  }
  if (typeof value === 'function') {
    return 'function'
  }

  if (value instanceof Array) {
    return 'array'
  }
  if (value instanceof Object) {
    return 'object'
  }
  // if ((value) instanceof Function){}
}

export {}
