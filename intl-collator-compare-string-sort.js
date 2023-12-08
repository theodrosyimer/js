/*
From: [Intl.Collator.prototype.compare()](http://127.0.0.1:58262/Dash/scrksaeb/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare.html)
*/
const array = ['Offenbach', 'Österreich', 'Odenwald']

const collator = new Intl.Collator('de-u-co-phonebk')

array.sort(collator.compare)

console.log(array.join(', '))
// → "Odenwald, Österreich, Offenbach"

export {}
