/* eslint-disable no-unused-expressions */
/* eslint-disable babel/no-unused-expressions */
const options = { mode: 'root', quoted: 'true' }
const array1 = [1, 'chat', 'chien']
const array2 = [2, 'oka', 'letze']
const array3 = [3, 'tata', 'field', [4, 'array', [5, 'another array']]]
// const multArrays = [array1, array2, array3]
const groupArrays = (...arrs) => arrs
const arrays = groupArrays(array1, array2, array3) // ?

const concatFlattenArrays1 = (_opt, arrs) =>
  arrs.reduce((acc, currArray) => acc.concat(currArray.flat(Infinity)), [])

const concatFlattenArrays2 = (array =>
  array.reduce((acc, currArray) => acc.concat(currArray.flat(Infinity)), []))(arrays)

concatFlattenArrays1(options, arrays) // ?

concatFlattenArrays2 // ?
export {}
