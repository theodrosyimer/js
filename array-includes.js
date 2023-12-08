/*
Use it instead of `indexof`, the triple equal-sign lies on `NaN` & `-0` value (return `true`)!!
*/
const arr = [10, 20, NaN, 30, 40, 50, -0]

arr.includes(20) // ?
arr.includes(60) // ?
arr.includes(20, 3) // ?
arr.includes(10, -2) // ?
arr.includes(40, -2) // ?
arr.includes(NaN) // ?
arr.includes(-0) // ?

export {}
