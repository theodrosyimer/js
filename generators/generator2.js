function* infinite() {
  let i = 0
  while (true) {
    yield i++
  }
}

const getNextGeneratorValue = iterator => () => iterator.next().value

const idGenerator = infinite()

const createId = getNextGeneratorValue(idGenerator)

const id1 = createId()
const id2 = createId()
const id3 = createId()
const id4 = createId()

console.log(id1, id2, id3, id4)
