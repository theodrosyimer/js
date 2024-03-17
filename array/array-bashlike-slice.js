// eslint-disable-next-line no-extend-native
Array.prototype.s = function s(str) {
  const [startStr, endStr, intervalStr] = str.split(':')
  const start = startStr ? +startStr : 0
  const end = endStr ? +endStr : 0
  const interval = intervalStr ? +intervalStr : 0

  console.log(start)
  console.log(end)
  console.log(interval)

  if (Math.sign(start) === -1 && Math.sign(end) === -1 && start > end) {
    const output = []
    for (let i = start; i > end; i--) {
      console.log(this.at(i))
      output.push(this.at(i))
    }
    return output
  }

  if (
    Math.sign(start) === -1 &&
    Math.sign(end) === -1 &&
    start < end &&
    interval
  ) {
    const output = []
    for (let i = start; i < end; i += interval) {
      console.log(this.at(i))
      output.push(this.at(i))
    }
    return output
  }

  if (
    Math.sign(start) === -1 &&
    Math.sign(end) === 0 &&
    interval
    // || (Math.sign(start) === 0 && Math.sign(end) === -1 && interval)
  ) {
    const output = []
    if (start > end) {
      for (let i = start; i < this.length + end; i += interval) {
        console.log(this.at(i))
        output.push(this.at(i))
      }
    } else {
      for (let i = start; i > end; i -= interval) {
        console.log(this.at(i))
        output.push(this.at(i))
      }
    }
    return output
  }

  if (interval) {
    const output = []
    for (let i = start; i < end; i += interval) {
      console.log(this[i])
      output.push(this[i])
    }
    return output
  }

  return this.slice(start, end)
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // without interval
console.log(arr.s('2:'))
console.log(arr.s(':5'))
console.log(arr.s('2:5'))

// // with interval
console.log(arr.s('2::2'))
console.log(arr.s(':9:2'))
console.log(arr.s('2:9:2'))

// // using negative indexes without interval
console.log(arr.s('-5:'))
console.log(arr.s(':-1'))
console.log(arr.s('-5:-1'))

// using negative indexes with interval
console.log(arr.s('-6:-1:2'))
console.log(arr.s(':-1:2'))

// using negative indexes going backward
console.log(arr.s('-1:-5'))

// using negative indexes going backward with interval
console.log(arr.s('-5::2'))
console.log(arr.s('-1:-5:2'))
