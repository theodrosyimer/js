// source: [(01:12)](https://www.youtube.com/watch?v=KiObdY77oyQ&ab_channel=basarat&t=1m12s)

function range(from = 0, to = Infinity, step = 1) {
  let value = from

  const next = () => {
    let done = value > to
    if (done) {
      return { done: true, value: undefined }
    }
    let result = { value, done: false }
    value += step
    return result
  }
  return {
    next,
    [Symbol.iterator]() {
      return this
    },
  }
}

const iterator2 = range(1, 3, 2)

for (const number of iterator2) {
  console.log(number)
}

// /////////////////////////////////////////////////////////////////////
