const arr1 = [1, 2]
const arr2 = [1, 2]
const arr3 = [2, 2]
const arr4 = [2, 3]
const arr5 = [2, 4]
const arr6 = [1, 8]
const arr7 = [1, 9]

const bigArr = [arr1, arr2, arr3, arr4, arr5, arr6, arr7]
const set3 = new Set(bigArr) // ?

const myNewSet = arr => new Set(arr)

const deleteDuplicates = params => {}

const sum = arr => {
  let result = []
  arr.forEach((x, i) => result.push([i, x[0] + x[1]]))
  result
  arr.forEach((value, index) => {
    const temp = value[index + 1]
    if (temp) {
    }
  })

  Object.fromEntries(result) // ?
  result = myNewSet(result) // ?

  return result
}

sum(bigArr) // ?

bigArr.reduce((acc, value) => acc + value[0], 0) // ?
