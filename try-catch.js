/**
 * @template T
 * @param {(...args: any) => Promise<T>} fn
 * @returns {Promise<[(Error | null), ( Awaited<T> | null)]>}
*/
export async function tryCatchAsync(fn) {
  try {
    const data = await fn()
    return [null, data]
  } catch (err) {
    console.error(err)
    return [err, null]
  }
}

/**
 * @template T
 * @param {(...args: any) => T} fn
 * @returns {[(Error | null), (T | null)]}
 */
export function tryCatchSync2(fn) {
  try {
    return [null, fn()]
  } catch (err) {
    console.error(err)
    return [err, null]
  }
}

/**
 * @template T
 * @param {(...args: any) => T} fn
 * @returns {(T | Error)}
 */
export function tryCatchSync(fn) {
  try {
    return fn()
  } catch (err) {
    console.error(err)
    return err
  }
}
