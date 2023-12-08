/*
The **`Intl.Collator.prototype.compare()`** method compares two strings according to the sort order of this `Collator` object.
*/
function firstAlphabetical(locale, letter1, letter2) {
  if (new Intl.Collator(locale).compare(letter1, letter2) < 0) {
    return letter1
  }
  return letter2
}

console.log(firstAlphabetical('fr', 'z', 'a'))
// expected output: "a"

console.log(firstAlphabetical('sv', 'z', 'ä'))
// expected output: "z"

// reversed order
function firstAlphabetical2(locale, letter1, letter2) {
  if (new Intl.Collator(locale).compare(letter1, letter2) > 0) {
    return letter1
  }
  return letter2
}

console.log(firstAlphabetical2('de', 'z', 'ä'))
// expected output: "z"

console.log(firstAlphabetical2('sv', 'z', 'ä'))
// expected output: "ä"

export {}
