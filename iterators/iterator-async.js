/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-promise-executor-return

/*
For any object implementing the async iterable protocol meaning that the object (or one of the objects up its prototype chain) must have a property with a `Symbol.asyncIterator` key that is an async method that returns an iterator.

Any Javascript built-in object that returns an `Iterator` work the same way.

An `Iterator` is an object that provides a `next()` method which returns the next item in the sequence. This method returns an object with two properties: `done` and `value`.

> Many APIs accept iterables, for example:
>
> * `new Map([iterable])`
> * `new WeakMap([iterable])`
> * `new Set([iterable])`
> * `new WeakSet([iterable])`
> * `Promise.all([iterable])`
> * `Promise.race([iterable])`
> * `Array.from([iterable])`
>
> There’re also statements and expressions that expect iterables, for example:
>
> * `**for ... of**` (loop)
> * `**...**` (spread operator)
> * `const **[a, b, ..]** = iterable;` (destructuring assignment)
> * `**yield***` (generator delegation)
>
> There’s a number of already built-in iterables in JavaScript:
> `String` , `Array` , `TypedArray` , `Map` , `Set`.
>
> We can generate a custom `Iterator` from any object
> to do work on the object lazily (only when needed so not loaded in memory at runtime
>
> source: [JavaScript Lazy Evaluation: Iterables & Iterators | by MelkorNemesis | JavaScript in Plain English](https://javascript.plainenglish.io/javascript-lazy-evaluation-iterables-iterators-e0770a5de96f)
*/

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// make fake data to play with Iterator
const store = () => {
  const data = {
    users: {
      1: { name: 'Theo' },
      2: { name: 'Yetu' },
      3: { name: 'Bruno' },
    },
    sessions: {
      1: { id: '0123456789' },
      2: { id: '0123456781' },
      3: { id: '0123456712' },
    },
  }

  return { get: (name, id) => delay(500).then(() => data[name][id]) }
}

// Custom 'asyncIterator'
const usersSessions = {
  [Symbol.asyncIterator]() {
    let i = 0
    return {
      async next() {
        i++
        const user = await store().get('users', i)

        if (!user) {
          return { done: true }
        }

        user.sessions = await store().get('sessions', i)

        return {
          value: user,
          done: false,
        }
      },
    }
  },
}

;(async () => {
  // so now we can iterate over the object userSessions with a for of loop because of the Symbol.asyncIterator being implemented
  for await (const userSession of usersSessions) {
    console.log(userSession)
  }
})()

// Instantiate iterator by assigning it to a variable
const iterator = usersSessions[Symbol.asyncIterator]()

// Iterate over items using 'iterator'
iterator.next()
iterator.next()
iterator.next()

export {}
