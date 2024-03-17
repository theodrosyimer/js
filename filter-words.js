const wordsArr = ['the', 'dog', 'a', 'bonne']
const lettersStr = 'ae'

filterWords(wordsArr, lettersStr)

function filterWords(words, letters) {
  const res = []
  for (let index = 0; index < words.length; index++) {
    const currentWord = words[index]

    for (let j = 0; j < letters.length; j++) {
      if (currentWord.includes(letters[j])) {
        res.push(currentWord)
      }
    }
  }
  return res
}
