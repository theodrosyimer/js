/**
 * ### My strategy for handling errors in JavaScript:
 *
 * - handle errors only at the top level of my code (everytime?) by letting the errors propagate to the top level.
 * - use `catch` method for asynchronous code
 * - use `try`...`catch` block only for synchronous code
 *    - exception: when i want to do something before the error propagates to the top level in asynchronous code (e.g. logging, cleaning up, etc.)
 *
 * ### Nice overview of error handling in JavaScript:
 *
* @see https://stackoverflow.com/a/62066352
> Do I need to wrap `try...catch` in all functions?

No, you don't, not unless you want to log it at every level for some reason. Just handle it at the top level.

In an `async` function, promise rejections are exceptions (as you know, since you're using `try`/`catch` with them), and exceptions propagate through the `async` call tree until/unless they're caught. Under the covers, `async` functions return promises and reject those promises when a synchronous exception occurs or when a promise the `async` function is `await`ing rejects.

Here's a simple example:
 */

import { tryCatchAsync } from "./try-catch.js"

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function outer() {
  // ...
  await delay(10)

  console.log('before calling inner')
  await inner()
  console.log('after calling inner (we never get here)')
}

async function inner() {
  // ...
  await delay(10)

  console.log('inside inner')

  // Something goes wrong
  // @ts-ignore
  null.foo()
}

outer().catch(e => {
  if (e instanceof Error) {
    console.log(`Caught error: ${e.message}`, e.stack)
  }
})

const [err, data] = await tryCatchAsync(outer)

/**
* Just as a side note: If you _do_ catch an error because you want to do X before the error propagates and you're going to re-throw the error after you do X, best practice is to re-throw the error you caught, rather than creating a new one. So:

```js
} catch (e) {
        // ...do X...
        throw e; // <== Not `throw new Error(e);`
    }
```

But only do that if you really need to do X when an error occurs. Most of the time, just leave the `try`/`catch` off entirely.
*/
