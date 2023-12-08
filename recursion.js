// [(4) Recursion Crash Course - YouTube](https://www.youtube.com/watch?v=lMBVwYrmFZQ)

// // First Recursive Function
// const countDown = num => {
//   if (num === 0) {
//     console.log('All done!')
//     return
//   }
//   console.log(num)
//   num--
//   countDown(num)
// }
// countDown(10)

// Second Recursive Function
const sumRange = num => {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}
