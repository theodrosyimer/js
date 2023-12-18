// eslint-disable-next-line no-promise-executor-return
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// make fake userData to play with Generator
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

  return { get: (name, id) => delay(2000).then(() => data[name][id]) }
}

// /////////////////////////////////////////////////////////////////////////////
// a Generator can NOT be an arrow function
async function* userSessions() {
  let i = 0
  while (true) {
    i++
    const user = await store().get('users', i)
    if (!user) return

    user.session = await store().get('sessions', i)
    // console.log('TCL: function*userSessions -> user', user)
    yield user
  }
}

// Instantiate generator by assigning it to a variable
const userData = userSessions()

  ; (async () => {
    for await (const userSession of userData) {
      console.log(userSession)
    }
  })()

// Instantiate generator
// const iterator = userSessions()

// console.log('TCL: iterator.next()', iterator.next())
// console.log('TCL: iterator.next()', iterator.next())
// console.log('TCL: iterator.next()', iterator.next())

export {}
