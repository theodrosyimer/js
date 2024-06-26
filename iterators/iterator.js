/* eslint-disable prettier/prettier */

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

  return { get: (name, id) => data[name][id] }
}

// Custom iterator
const userSessions = {
  [Symbol.iterator]() {
    let i = 0
    return {
      next() {
        i++
        const user = store().get('users', i)

        if (!user) {
          return { done: true }
        }

        user.session = store().get('sessions', i)

        return {
          value: user,
          done: false,
        }
      },
    }
  },
}

;(() => {
  // so now we can iterate over the object userSessions with a for of loop because of the Symbol.iterator being implemented
  for (const userSession of userSessions) {
    console.log('TCL: userSession', userSession)
  }
})()

// Instantiate iterator by assigning it to a variable
const iterator = userSessions[Symbol.iterator]()

// Iterate over items using 'iterator'
console.log('TCL: iterator.next()', iterator.next())
console.log('TCL: iterator.next()', iterator.next())
console.log('TCL: iterator.next()', iterator.next())

export {}
