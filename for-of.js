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

  return { get: (name, id) => data[name][id] }
}

/*
For any object implementing the iterable protocol meaning that the object (or one of the objects up its prototype chain) must have a property with a `Symbol.iterator` key that is a method that returns an iterator.

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

// Custom iterator
const userSessions = {
  [Symbol.iterator]() {
    let i = 0
    return {
      next() {
        i++
        const user = store().get('users', i)

        if (!user) {
          return { done: true }
        }

        user.session = store().get('sessions', i)

        return {
          value: user,
          done: false,
        }
      },
    }
  },
}

;(() => {
  // so now we can iterate over the object userSessions with a for of loop because of the Symbol.iterator being implemented
  for (const userSession of userSessions) {
    console.log('TCL: userSession', userSession)
  }
})()
