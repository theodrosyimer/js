const fileToMatch = 'trjjertjr.tpl fjldfs.tpl'
const extension = '.tpl'

const re = new RegExp(`(?:.*)${extension}`) /*?*/
// const re = `(?:.*)${extension}` /*?*/

const match = fileToMatch.match(re) /*?*/

if (match) {
  console.log(fileToMatch)
}

// Template Literals doesn't work without using a constructor
const re2 = /`(?:.*)${extension}`/g /*?*/

const match2 = fileToMatch.match(re2) /*?*/

if (match2) {
  console.log(fileToMatch)
}
