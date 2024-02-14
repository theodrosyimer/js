/*
`.replace` is case-sensitive! Use regex if case-insensitive is needed.
*/

const string =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus numquam harum repudiandae minima illo aliquam pariatur, et corrupti repellat ab unde officiis doloremque repellendus ipsa sed atque explicabo voluptatibus!'

const find = 'e' || process.argv[2]
const replaceBy = '1' || process.argv[3]

const replaceChar = char => char.replace(find, replaceBy)

const result = s => [...s].map(replaceChar).join('') // ?

console.log(string) // ?
console.log(result(string)) // ?

// ***************************************************************************************

const replacer = regex => repl => str => str.replace(regex, repl)

const censor1AllOccurences = replacer(/[aeiouy]/gi)('*')
censor1AllOccurences(string) // ?

const censor2OnlyFirstOccurence = replacer('e')('*')
censor2OnlyFirstOccurence(string) // ?
