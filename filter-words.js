const wordsArr = ['the', 'dog', 'a', 'bonne']
const lettersStr = 'ae'

function filterWords(words, letters) {
  const res = []
  let iterationCount = 0
  for (let index = 0; index < words.length; index++) {
    const currentWord = words[index]

    for (let j = 0; j < letters.length; j++) {
      iterationCount++
      if (currentWord.includes(letters[j])) {
        res.push(currentWord)
      }
    }
  }
  console.log(iterationCount)
  return res
}

filterWords(wordsArr, lettersStr)
