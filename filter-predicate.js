const array = [0, 1, 2, null, 4, undefined, 5, false, '', true]

filter(array, value => value !== null && value !== undefined)

function filter(arr, predicateFn) {
  const newArr = []

  for (let index = 0; index < arr.length; index++) {
    const element = array[index]
    if (predicateFn(element)) {
      newArr.push(element)
    }
  }
  return newArr
}
