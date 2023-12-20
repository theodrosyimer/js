// https://replit.com/@MelkorNemesis/simple-iterator-iterable
// [JavaScript Lazy Evaluation: Iterables & Iterators | by MelkorNemesis | JavaScript in Plain English](https://javascript.plainenglish.io/javascript-lazy-evaluation-iterables-iterators-e0770a5de96f)

function createRangeIterator(from, to) {
  let i = from

  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      if (i <= to) {
        return { value: i++, done: false }
      } else {
        return { done: true }
      }
    },
  }
}

const iterator = createRangeIterator(1, 3)

for (const number of iterator) {
  console.log(number)
}
