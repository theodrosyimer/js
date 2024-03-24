/* eslint-disable no-extend-native */
const arr = [1, 2, 3]
console.log('original:', arr)
/**
 * @param {(value: unknown, index: number, array: unknown[]) => unknown} callback
 */
Array.prototype.myForEach = function myForEach(callback) {
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i], i, this)
  }
}

arr.myForEach(v => v + 1)
console.log('add 1:', arr)

arr.myForEach((v, i) => ({ [i]: v + 1 }))
console.log('add 1 AND create object', arr)
