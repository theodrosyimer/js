/*
From: [Intl.Collator.prototype.compare()](http://127.0.0.1:58262/Dash/scrksaeb/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare.html)
*/
const wordsToCompare = ['Congrès', 'congres', 'Assemblée', 'poisson']

const collator = new Intl.Collator('fr', {
  usage: 'search',
  sensitivity: 'base',
})

const search = 'congres'

const matches = wordsToCompare.filter(word => collator.compare(word, search) === 0)

console.log(matches.join(', '))
// → "Congrès, congres"

export {}
