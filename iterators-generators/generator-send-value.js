function* gen() {
  while (true) {
    const value = yield null
    console.log(value)
  }
}

const g = gen()
g.next(1) // ?
g.next(2) // ?
g.next(3) // ?
