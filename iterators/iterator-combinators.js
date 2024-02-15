/*
code: https://replit.com/@MelkorNemesis/combinators
source: [JavaScript Lazy Evaluation: Iterables & Iterators | by MelkorNemesis | JavaScript in Plain English](https://javascript.plainenglish.io/javascript-lazy-evaluation-iterables-iterators-e0770a5de96f)

> ## Combinators
>
> Combinators are functions that combine existing iterables to create new ones. A composition of iterables.
>
> Because of this, we are able to create a lot of utility functions. How about `map` or `filter`? See the following code and give it a minute to sink in.
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

function map(fn, iterable) {
  const iter = iterable[Symbol.iterator]()

  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      const n = iter.next()
      if (!n.done) {
        return { value: fn(n.value), done: false }
      } else {
        return { done: true }
      }
    },
  }
}

function filter(predicate, iterable) {
  const iter = iterable[Symbol.iterator]()

  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      const n = iter.next()
      if (!n.done) {
        if (predicate(n.value)) {
          return { value: n.value, done: false }
        } else {
          return this.next()
        }
      } else {
        return { done: true }
      }
    },
  }
}

function take(n, iterable) {
  const iter = iterable[Symbol.iterator]()

  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      if (n > 0) {
        n--
        return iter.next()
      } else {
        return { done: true }
      }
    },
  }
}

function cycle(iterable) {
  const iter = iterable[Symbol.iterator]()
  const saved = []
  let idx = 0

  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      const n = iter.next()
      if (!n.done) {
        saved[idx++] = n.value
        return { value: n.value, done: false }
      } else {
        return { value: saved[idx++ % saved.length], done: false }
      }
    },
  }
}

function collect(iterable) {
  // consumes the iterator
  return Array.from(iterable)
}

const evenNumbersIterator = createEvenNumbersIterator()
const result = collect(
  // 7. and collect the result
  filter(
    // ⬆️ 6. keep only values higher than 1
    val => val > 1,
    map(
      // ⬆️ 5. divide obtained values by 2
      val => val / 2,
      take(
        // ⬆️ 4. take only six of them
        6,
        cycle(
          // ⬆️ 3. make an infinite cycling sequence of them
          take(
            // ⬆️ 2. take just three of them
            3,
            evenNumbersIterator, // ⬆️ 1. infinite sequence of even numbers
          ),
        ),
      ),
    ),
  ),
)

console.log(result)
