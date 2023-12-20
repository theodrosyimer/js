# Iterators

## What is an iterator and an iterable?

An **Iterator** is an object that provides a `next()` method which returns an object with two properties: `done` and `value`.

    Iterator
    Object
        next() => { value, done: boolean }

An **Iterable** is an object that implements the `@@iterator` method, meaning that the object (or one of the objects up its prototype chain) must have a property with a `Symbol.iterator` key that is available via constant `Symbol.iterator` and is a zero-argument function that returns an iterator.

    Iterable
    Object
      [Symbol.iterator]: Iterator

Any Javascript built-in object that returns an `Iterator` work the same way.

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

```js
// source: [Iterator, Iterable and IterableIterator // Professional JavaScript MasterClass - (Youtube)](https://www.youtube.com/watch?v=KiObdY77oyQ&ab_channel=basarat)
// ./range.js
function range(from = 0, to = Infinity, step = 1) {
  let value = from

  const next = () => {
    let done = value > to
    if (done) {
      return { done: true, value: undefined }
    }
    let result = { value, done: false }
    value += step
    return result
  }
  return {
    next,
    [Symbol.iterator]() {
      return this
    },
  }
}
```

## Resources

### Videos

* [Iterator, Iterable and IterableIterator // Professional JavaScript MasterClass - (Youtube)](https://www.youtube.com/watch?v=KiObdY77oyQ&ab_channel=basarat)

### Articles

* [JavaScript Lazy Evaluation: Iterables & Iterators | by MelkorNemesis | JavaScript in Plain English](https://javascript.plainenglish.io/javascript-lazy-evaluation-iterables-iterators-e0770a5de96f)
* [https://exploringjs.com/es6/ch_iteration.html](https://exploringjs.com/es6/ch_iteration.html)
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
* [https://swizec.com/blog/finally-a-practical-use-case-for-javascript-generators/](https://swizec.com/blog/finally-a-practical-use-case-for-javascript-generators/)
* [https://2ality.com/2015/02/es6-iteration.html](https://2ality.com/2015/02/es6-iteration.html)
* [https://www.freecodecamp.org/news/how-and-why-you-should-use-python-generators-f6fb56650888/](https://www.freecodecamp.org/news/how-and-why-you-should-use-python-generators-f6fb56650888/)
* [https://vegibit.com/iterators-in-es6/#:~:text=ES6%20now%20has%20what's%20known,that%20returns%20an%20iterator%20object](https://vegibit.com/iterators-in-es6/#:~:text=ES6%20now%20has%20what's%20known,that%20returns%20an%20iterator%20object).
* [https://en.wikipedia.org/wiki/Lazy_evaluation](https://en.wikipedia.org/wiki/Lazy_evaluation)
