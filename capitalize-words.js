import { timeIt } from './time-it.js'

function capitalize(str) {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

console.log(capitalize('hello world!'))

function capitalize2(str) {
  return str.slice().replace(/^(.)|\s+(.)/g, letter => letter.toUpperCase())
}

console.log(capitalize2('hello world!'))

function capitalize3(str) {
  const [first, ...rest] = str
  return `${first.toUpperCase()}${rest}`
}

console.log(timeIt(capitalize2, 'hello world')) // faster
console.log(timeIt(capitalize, 'hello world')) // a little bit slower, sometimes...
console.log(timeIt(capitalize3, 'hello world')) // slower
