// make fake data to play with Generator
const store = () => {
  const data = {
    users: {
      1: { name: 'Theo' },
      2: { name: 'Yetu' },
      3: { name: 'Bruno' },
    },
    sessions: {
      1: { id: '0123456789' },
      2: { id: '0123456781' },
      3: { id: '0123456712' },
    },
  }

  return { get: (name, id) => data[name][id] }
}

// /////////////////////////////////////////////////////////////////////////////
// a Generator can NOT be an arrow function
function* userSessions() {
  let i = 0
  while (true) {
    i++
    const user = store().get('users', i) // ?
    if (!user) return

    user.session = store().get('sessions', i) // ?
    yield user
  }
}

// Instantiate generator by assigning it to a variable
const iterator = userSessions()
iterator.next() // ?
iterator.next() // ?
iterator.next() // ?
iterator.next() // ?

// /////////////////////////////////////////////////////////////////////////////
// Generator with parameter(s)
function* gen1(i) {
  yield i + 1
  yield i + 2
  yield i + 3
}

const iterator2 = gen1(10)

iterator2.next() // ?
iterator2.next() // ?
iterator2.next() // ?
iterator2.next() // ?

// /////////////////////////////////////////////////////////////////////////////
// Generator with parameter(s) & yield into generator
function* gen2(i) {
  yield* gen1(i)
  yield i
  yield i
}

const iterator3 = gen2(20)

// it yield all values from 'gen1' before values from 'gen2' because of its position
iterator3.next() // ?
iterator3.next() // ?
iterator3.next() // ?
iterator3.next() // ?
iterator3.next() // ?
iterator3.next() // ?

export {}
