// /**
//  *
//  * @param {number} number
//  * @returns
//  */
// function roman(number) {
//   let result = ''
//   const str = [...String(number)]
//   let { length } = str
//   while (length) {
//     if (length === 1) {
//       if (+str[0] > 0 && +str[0] < 4) {
//         for (let i = 0; i < str[0]; i++) {
//           result += 'I'
//         }
//       }

//       if (+str[0] === 4) {
//         result += 'IV'
//       }

//       if (+str[0] === 5) {
//         result += 'V'
//       }

//       if (+str[0] > 5 && +str[0] < 9) {
//         result += 'V'
//         for (let i = 0; i < str[0] - 5; i++) {
//           result += 'I'
//         }
//       }

//       if (+str[0] === 9) {
//         result += 'IX'
//       }

//       str.shift()
//       length--
//     }

//     if (length === 2) {
//       if (+str[0] > 0 && +str[0] < 4) {
//         for (let i = 0; i < str[0]; i++) {
//           result += 'X'
//         }
//       }

//       if (+str[0] === 4) {
//         result += 'XL'
//       }

//       if (+str[0] === 5) {
//         result += 'L'
//       }

//       if (+str[0] > 5 && +str[0] < 9) {
//         result += 'L'
//         for (let i = 0; i < str[0] - 5; i++) {
//           result += 'X'
//         }
//       }

//       if (+str[0] === 9) {
//         result += 'XC'
//       }
//       str.shift()
//       length--
//     }

//     if (length === 3) {
//       if (+str[0] > 0 && +str[0] < 4) {
//         for (let i = 0; i < str[0]; i++) {
//           result += 'C'
//         }
//       }

//       if (+str[0] === 4) {
//         result += 'CD'
//       }

//       if (+str[0] === 5) {
//         result += 'D'
//       }

//       if (+str[0] > 5 && +str[0] < 9) {
//         result += 'D'
//         for (let i = 0; i < str[0] - 5; i++) {
//           result += 'C'
//         }
//       }

//       if (+str[0] === 9) {
//         result += 'CM'
//       }
//       str.shift()
//       length--
//     }
//   }
//   return result
// }

/**
 * Refactored version
 * @param {number} number
 */
function romanToArabic(number) {
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
    if (length === 1) convert(arrayFromString, { one: 'I', five: 'V', nextValue: 'X' })

    if (length === 2) convert(arrayFromString, { one: 'X', five: 'L', nextValue: 'C' })

    if (length === 3) convert(arrayFromString, { one: 'C', five: 'D', nextValue: 'M' })

    if (length === 4) return (result += 'M')
  }
  return result
}

romanToArabic(3) /*?. $*/
romanToArabic(4) /*?. $*/
romanToArabic(5) /*?. $*/
romanToArabic(8) /*?. $*/
romanToArabic(9) /*?. $*/
romanToArabic(13) /*?. $*/
romanToArabic(23) /*?. $*/
romanToArabic(40) /*?. $*/
romanToArabic(49) /*?. $*/
romanToArabic(50) /*?. $*/
romanToArabic(80) /*?. $*/
romanToArabic(90) /*?. $*/
romanToArabic(400) /*?. $*/
romanToArabic(500) /*?. $*/
romanToArabic(800) /*?. $*/
romanToArabic(900) /*?. $*/
romanToArabic(483) /*?. $*/
romanToArabic(583) /*?. $*/

// eslint-disable-next-line no-unused-expressions
romanToArabic(483) === 'CDLXXXIII' /*?. $*/
// String(483).length /*?. $*/
