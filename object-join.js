const users = {
  users: {
    1: { name: 'Theo' },
    2: { name: 'Yetu' },
    3: { name: 'Maman' },
  },
}
const sessions = {
  sessions: {
    1: { id: '0123456789' },
    2: { id: '0123456781' },
    3: { id: '0123456712' },
  },
}

const mergeObjects = (...args) =>
  args.reduce(
    (resultObject, currentObject) => ({ ...resultObject, ...currentObject }),
    {}
  )

mergeObjects(users, sessions) // ?
