/* eslint-disable no-bitwise */
/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */

/**
 * @param {number} n
 */
function assertIsNumber(n) {
  if (typeof n !== 'number') throw new Error(`Expected a number, received "${JSON.stringify(n)}"`)
}

/**
 * @param {number} numerator
 * @param {number} denominator
 */
export function divide(numerator, denominator) {
  assertIsNumber(numerator)
  assertIsNumber(denominator)
  return numerator / denominator
}

/* eslint-disable no-unused-vars */
export function isFloat(n) {
  assertIsNumber(n)
  return n % 1 !== 0
}

export function isInt(n) {
  assertIsNumber(n)
  return n % 1 === 0
}

/**
 * @param {number} n
 */
export function isIntegerGreaterThanZero(n) {
  assertIsNumber(n)
  return n > 0 && Number.isInteger(n)
}

/**
 * @param {number} n
 */
export function isInteger(n) {
  assertIsNumber(n)
  return Number.isInteger(n)
}

/**
 * @param {number} CONSTANT
 */
export function isConstantMultipleOf(CONSTANT) {
  return numberToCheck => {
    const quotient = divide(numberToCheck, CONSTANT)

    return {
      isMultiple: isIntegerGreaterThanZero(quotient),
      quotient,
      numberToCheck,
      constant: CONSTANT,
    }
  }
}

/**
 * @param {number} multipleOf
 * @returns {(n: number) => boolean}
 */
export function isMultipleOfFnFactory(multipleOf) {
  assertIsNumber(multipleOf)
  return n => assertIsNumber(n) && n % multipleOf === 0
}

/**
 * Get the integer part from a quotient, ex: `23/6 = 3.83333` --> `3`
 * @param {number} n
 * @param {number} m
 */
// eslint-disable-next-line no-bitwise
export function getWholeNumberFromQuotient(n, m) {
  assertIsNumber(n)
  assertIsNumber(m)
  return getInteger(n / m)
}

/**
 * @param {number} n
 */
export function getInteger(n) {
  assertIsNumber(n)
  return Math.trunc(n)
}

/**
 * Bad code version
 * @param {number|string} numberOrString
 */
export function getInteger1(numberOrString) {
  return +String(parseFloat(numberOrString)).split('.' || ',')[0]
}

// Bad code version
export function getInteger2(n) {
  assertIsNumber(n)
  return n | 0
} /*?. `${$}`*/

// Bad code version
export function getInteger3(n) {
  assertIsNumber(n)
  return n >> 0
} /*?. `${$}`*/

/**
 * Returns the remainder of a division
 * @param {number} numerator the numerator for the division
 * @param {number} denominator the denominator for the division
 * @returns {number} an integer representing the remainder of a division
 */
export function remainder(numerator, denominator) {
  assertIsNumber(numerator)
  assertIsNumber(denominator)
  return numerator % denominator
}

// //////////////////// GEOMETRY //////////////////////

export function area(n) {
  assertIsNumber(n)
  return Math.PI * n ** 2
}

export function hypotenuse(a, b) {
  assertIsNumber(a)
  assertIsNumber(b)
  return Math.sqrt(a ** 2 + b ** 2)
}

/**
 *
 * @param {number} n
 * @param {number} placeValue[1] 1 = ones / 10 = tens / 100 = hundreds / 1000 = thousands / etc...
 */
export function roundBy(n, placeValue = 1) {
  assertIsNumber(n)
  assertIsNumber(placeValue)
  return Math.round(n / placeValue) * placeValue
}
/**
 *
 * @param {string} string roman numerals
 * @returns arabic number representation of the passed roman numerals
 */
export function romanToArabic(string) {
  let result = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'I') result += 1
    if (string[i] === 'V' && string[i - 1] === 'I') result += 3
    if (string[i] === 'V' && string[i - 1] !== 'I') result += 5
    if (string[i] === 'X' && string[i - 1] === 'I') result += 8
    if (string[i] === 'X' && string[i - 1] !== 'I') result += 10
    if (string[i] === 'L' && string[i - 1] === 'X') result += 30
    if (string[i] === 'L' && string[i - 1] !== 'X') result += 50
    if (string[i] === 'C' && string[i - 1] === 'X') result += 80
    if (string[i] === 'C' && string[i - 1] !== 'X') result += 100
    if (string[i] === 'D' && string[i - 1] === 'C') result += 300
    if (string[i] === 'D' && string[i - 1] !== 'C') result += 500
    if (string[i] === 'M' && string[i - 1] === 'C') result += 800
    if (string[i] === 'M' && string[i - 1] !== 'C') result += 1000
  }
  return result
}

/**
 * TODO: Refactor the repetitive code into a function: DRY
 * @param {number} number
 */
export function arabicToRoman(number) {
  let result = ''
  const arrayFromString = [...String(number)]
  let { length } = arrayFromString

  const convert = (array, { one, five, nextValue }) => {
    if (+array[0] > 0 && +array[0] < 4) {
      for (let i = 0; i < +array[0]; i++) {
        result += one
      }
    }

    if (+array[0] === 4) {
      result += one + five
    }

    if (+array[0] === 5) {
      result += five
    }

    if (+array[0] > 5 && +array[0] < 9) {
      result += five
      for (let i = 0; i < +array[0] - 5; i++) {
        result += one
      }
    }

    if (+array[0] === 9) {
      result += one + nextValue
    }

    array.shift()
    length--
  }
  while (length) {
    if (length === 1)
      convert(arrayFromString, {
        one: 'I',
        five: 'V',
        nextValue: 'X',
      })

    if (length === 2)
      convert(arrayFromString, {
        one: 'X',
        five: 'L',
        nextValue: 'C',
      })

    if (length === 3)
      convert(arrayFromString, {
        one: 'C',
        five: 'D',
        nextValue: 'M',
      })

    if (length === 4) return (result += 'M')
  }
  return result
}

export function sumMultiples(n) {
  assertIsNumber(n)

  let currentCalculation = []
  let isMultipleOf3GreaterThanN = false
  let isMultipleOf5GreaterThanN = false

  const result = new Set()

  const makeMultiplesOf3Or5LessThanN = (n, multiplier = 1) => {
    if (isMultipleOf3GreaterThanN && isMultipleOf5GreaterThanN) return

    currentCalculation = [multiplier * 3, multiplier * 5]

    if (currentCalculation[0] > n) isMultipleOf3GreaterThanN = true
    if (currentCalculation[1] > n) isMultipleOf5GreaterThanN = true

    if (currentCalculation[0] < n) result.add(currentCalculation[0])
    if (currentCalculation[1] < n) result.add(currentCalculation[1])

    makeMultiplesOf3Or5LessThanN(n, multiplier + 1)
  }

  makeMultiplesOf3Or5LessThanN(n)
  return [...result].reduce((acc, n) => acc + n, 0)
}

/**
 * Greatest common divisor
 *
 * @param {number} n1 a number
 * @param {number} n2 a number
 * @returns greatest common divisor from n1 and n2
 */
export function gcd(n1, n2) {
  assertIsNumber(n1)
  assertIsNumber(n2)

  if (n1 === n2) return n1
  if (n1 === 1 || n2 === 1) return 1

  const isMultiple = n1 < n2 ? n2 % n1 === 0 : n1 % n2 === 0

  const smallest = n1 < n2 ? n1 : n2

  if (!isMultiple && smallest % 2 !== 0) return 1

  if (isMultiple && n1 < n2) return n1
  if (isMultiple && n1 > n2) return n2

  return n1 < n2 ? n1 / 2 : n2 / 2
}

function toNegative(n) {
  return -Math.abs(n)
}

function toPositive(n) {
  return Math.abs(n)
}

function invertSign(n) {
  return -(n)
}
