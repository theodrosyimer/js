/**
 * @template T
 * @param {number} count Sets the length of the array
 * @param {(y: number) => T} fn The function passed fo the `map()` function
 * @returns {Array<T>}
 */
const newArrayFromCounterThenMapFn = (count, fn) => [...Array(count)].map(fn)

/**
 * Curried function definition used for the `map()` function
 * @template T
 * @param {T} separator
 */
const setSeparator =
  separator =>
  /**
   * @param {number} count
   * @returns {T}
   */ count =>
    separator

const tabSeparator = setSeparator('\t') // ?
newArrayFromCounterThenMapFn(3, tabSeparator) // ?

const spaceSeparator = setSeparator(' ')
newArrayFromCounterThenMapFn(1, spaceSeparator) // ?

const newlineSeparator = setSeparator('\n')
newArrayFromCounterThenMapFn(4, newlineSeparator) // ?
