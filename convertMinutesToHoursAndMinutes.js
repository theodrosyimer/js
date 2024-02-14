import { tryCatchSync, tryCatchSync2 } from './try-catch/try-catch.js'

let d = 179
function convertMinutesToHoursAndMinutes(n) {
  return `${
    Math.trunc(n / 60) < 10 ? `0${Math.trunc(n / 60)}` : Math.trunc(n / 60)
  }h${n % 60 < 10 ? `0${n % 60}` : n % 60}`
}

function convertSecondsToHoursAndMinutes(duration) {
  return `${
    Math.trunc(duration / 3600) < 10
      ? `0${Math.trunc(duration / 3600)}`
      : `${Math.trunc(duration / 3600)}`
  }h${
    Math.trunc((duration / 60) % 60) < 10
      ? `0${Math.trunc((duration / 60) % 60)}`
      : `${Math.trunc((duration / 60) % 60)}`
  }m${duration % 60 < 10 ? `0${duration % 60}` : duration % 60}s`
}

convertMinutesToHoursAndMinutes(d)
convertMinutesToHoursAndMinutes(d) === '02h59'

// Refactored Version, better?

/**
 *
 * @param {number} minutes
 * @throws {Error}
 */
function convertMinutesToHoursAndMinutes2(minutes) {
  if (typeof minutes !== 'number') {
    throw new Error('n must be a number')
  }

  /**
   * @param {number} n
   */
  function extractIntegerPart(n) {
    return Math.trunc(n)
  }

  /**
   * @param {number} n
   */
  function convertMinutesToHours(n) {
    return n / 60
  }

  /**
   * @param {number} n
   */
  function getRemainder(n) {
    return n % 60
  }

  /**
   * @param {number} n
   */
  function getHoursIntegerFromMinutes(n) {
    return extractIntegerPart(convertMinutesToHours(n))
  }

  /**
   * @param {number} n
   */
  function calculateMinutes(n) {
    return getRemainder(n)
  }

    /**
   * @param {number} n
   * @param {{ (n: number): number }} cb
   */
  function format(n, cb) {
    return cb(n) < 10 ? `0${cb(n)}` : `${cb(n)}`
  }

  return `${format(minutes, getHoursIntegerFromMinutes)}h${format(minutes, calculateMinutes)}`
}

/**
 *
 * @param {number} minutes
 * @throws {Error}
 */
// function convertMinutesToHoursAndMinutes2(minutes) {
//   if (typeof minutes !== 'number') {
//     throw new Error('n must be a number')
//   }

//   /**
//    * @param {{ (): number }} cb
//    */
//   function format(cb) {
//     return cb() < 10 ? `0${cb()}` : `${cb()}`
//   }
//   return `${format(() => Math.trunc(minutes / 60))}h${format(
//     () => minutes % 60,
//   )}`
// }

convertMinutesToHoursAndMinutes2(d) === '02h59'
// @ts-expect-error
tryCatchSync(() => convertMinutesToHoursAndMinutes2('d'))
tryCatchSync(() => convertMinutesToHoursAndMinutes2(d))

// @ts-expect-error
const [err, data] = tryCatchSync2(() => convertMinutesToHoursAndMinutes2('d'))

if (err) {
  console.log(err.message)
}

if (!data) {
  console.log('No data!')
}

if (data) {
  console.log(data)
}

const [err2, data2] = tryCatchSync2(() => convertMinutesToHoursAndMinutes2(d))

if (err2) {
  console.log(err2.message)
}

if (!data2) {
  console.log('No data 2!')
}

if (data2) {
  console.log(data2)
}
