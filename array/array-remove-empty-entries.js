/* eslint-disable no-sparse-arrays */
// eslint-disable-next-line prettier/prettier
const arrayWithFalsyValues = [, , , , 'hello', false, true, 0, '', null, undefined, 1, 100, ' ']

// Remove all falsy values and empty entries
arrayWithFalsyValues.filter(Boolean) // ?
arrayWithFalsyValues.filter(e => e) // ?

// Remove all falsy values and empty entries EXCEPT `0`
arrayWithFalsyValues.filter(e => e === 0 || e) // ?

// Remove ONLY empty entries
arrayWithFalsyValues.filter(() => true) // ?
arrayWithFalsyValues.flat(0) // ?

// Remove ONLY `null` and `undefined`
arrayWithFalsyValues.filter(e => e != null) // ?
