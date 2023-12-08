/*
When comparing large numbers of strings, such as in sorting large arrays, it is better to create an [`Intl.Collator`](../Collator.html) object and use the function provided by its [`compare`](../Collator/compare.html) property.
*/

// Using `localeCompare()`
// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c') // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against') // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a') // 0

// sort an array
const items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu']
items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true })) // ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']

// Check browser support for extended arguments
function checkBrowserSupportForStringLocaleCompare() {
  try {
    'foo'.localeCompare('bar', 'i')
  } catch (e) {
    return e.name === 'RangeError'
  }
  return false
}

// Using options
// in German, ä has a as the base letter
console.log('ä'.localeCompare('a', 'de', { sensitivity: 'base' })) // 0

// in Swedish, ä and a are separate base letters
console.log('ä'.localeCompare('a', 'sv', { sensitivity: 'base' })) // a positive value

// NumeNumeric sorting
// by default, "2" > "10"
console.log('2'.localeCompare('10')) // 1

// numeric using options:
console.log('2'.localeCompare('10', undefined, { numeric: true })) // -1

// numeric using locales tag:
console.log('2'.localeCompare('10', 'en-u-kn-true')) // -1
