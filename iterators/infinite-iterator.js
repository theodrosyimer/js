/*
code: https://replit.com/@MelkorNemesis/infinite-iterator
source: [JavaScript Lazy Evaluation: Iterables & Iterators | by MelkorNemesis | JavaScript in Plain English](https://javascript.plainenglish.io/javascript-lazy-evaluation-iterables-iterators-e0770a5de96f)
*/

function createEvenNumbersIterator() {
  let value = 0

  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      value += 2
      return { value, done: false }
    },
  }
}

const it = createEvenNumbersIterator()

// ask for some even numbers
const [a, b, c] = it
console.log({ a, b, c })

// ask for more even numbers
const [x, y, z] = it
console.log({ x, y, z })

// make sure to exit the loop
for (const even of it) {
  console.log(even)
  if (even > 20) {
    break
  }
}
