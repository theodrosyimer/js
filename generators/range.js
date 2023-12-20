// source: [(01:12)](https://www.youtube.com/watch?v=KiObdY77oyQ&ab_channel=basarat&t=1m12s)

function* range(from = 0, to = Infinity, step = 1) {
  let value = from

  for (let value = from; value <= to; value += step) {
    yield value
  }
}

const iterator2 = range(1, 3, 2)

for (const number of iterator2) {
  console.log(number)
}
