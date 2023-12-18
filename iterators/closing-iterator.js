/*
code: https://replit.com/@MelkorNemesis/closing-iterator
source: [JavaScript Lazy Evaluation: Iterables & Iterators | by MelkorNemesis | JavaScript in Plain English](https://javascript.plainenglish.io/javascript-lazy-evaluation-iterables-iterators-e0770a5de96f)

> ## Closing iterator
>
> Earlier we mentioned iterators can optionally have a `return()` method. This method is used when the iterator was not iterated over until the end and lets the iterator do a cleanup.
>
> `for ... of` loops can terminate the iteration earlier by:
>
> * `break`
> * `continue` (when you continue outer loop with label)
> * `throw`
> * `return`
>
> The following constructs close iterators that are not consumed:
>
> * `for ... of`
> * `yield*`
> * destructuring
> * `Array.from`
> * `Map(), Set(), WeakMap(), WeakSet()`
> * `Promise.all(), Promise.race()`

Taken from [https://2ality.com/2015/02/es6-iteration.html](https://2ality.com/2015/02/es6-iteration.html).

*/
function createCloseableIterator() {
  let idx = 0
  const data = ['a', 'b', 'c', 'd', 'e']

  function cleanup() {
    console.log('Performing cleanup')
  }

  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      if (idx <= data.length - 1) {
        return { value: data[idx++], done: false }
      } else {
        cleanup()
        return { done: true }
      }
    },
    return() {
      cleanup()
      return { done: true }
    },
  }
}

// iterator cleanup through return() method
const it = createCloseableIterator()

for (const value of it) {
  console.log(value)
  if (value === 'c') {
    break
  }
}

console.log('\n----------\n')

// iterator cleanup through next() next method
const _it = createCloseableIterator()
for (const value of _it) {
  console.log(value)
}
