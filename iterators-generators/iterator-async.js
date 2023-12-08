/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-promise-executor-return
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// make fake data to play with Iterator
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

  return { get: (name, id) => delay(500).then(() => data[name][id]) }
}

// Custom 'asyncIterator'
const usersSessions = {
  [Symbol.asyncIterator]() {
    let i = 0
    return {
      async next() {
        i++
        const user = await store().get('users', i)

        if (!user) {
          return { done: true }
        }

        user.sessions = await store().get('sessions', i)

        return {
          value: user,
          done: false,
        }
      },
    }
  },
}

  ; (async () => {
    for await (const userSession of usersSessions) {
      console.log(userSession)
    }
  })()

// Instantiate iterator by assigning it to a variable
const iterator = usersSessions[Symbol.asyncIterator]()

// Iterate over items using 'iterator'
iterator.next()
iterator.next()
iterator.next()

export {}
