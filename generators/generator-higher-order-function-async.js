/* eslint-disable no-param-reassign */
/*
see comment: [Higher-order iterators in JavaScript - YouTube](https://www.youtube.com/watch?v=GYRMNp1SKXA&lc=UgyWoMPzc-TOZ68UshJ4AaABAg)
*/
export const map = mapper =>
  async function* (iterable) {
    for await (const item of iterable) {
      yield mapper(item)
    }
  }

export const filter = predicate =>
  async function* (iterable) {
    for await (const item of iterable) {
      if (predicate(item)) yield item
    }
  }

// > this one's behavior is a bit different from the Array's reduce since it yields the accumulator on each item (because your original iterable may never end)
export const reduce = (reducer, acc) =>
  async function* (iterable) {
    for await (const item of iterable) {
      yield (acc = reducer(acc, item))
    }
  }

// > By the way, with these 3 and a pipe function you can implement your own very powerfull redux-like state management library.

// > By the way I was experimenting and I realized that like you can re-code Array.map with Array.reduce, you can do the same with these:
export const mapWithReduce = mapper => reduce((_, item) => mapper(item))

// > But you can also do the opposite (which is not possible with synchronous map and reduce):
export const reduceWithMap = (reducer, acc) => map(item => (acc = reducer(acc, item)))

// > On the other hand there is no way to make the stream filter from reduce or map
