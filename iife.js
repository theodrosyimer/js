/* eslint-disable no-shadow */
const arrayOfData = [1, 2, 3, 4, 5, 6]

const { x2, message, args } = (args => {
  const minus1 = args.map(n => n - 1)
  const x2 = args.map(n => n * 2)
  return { x2, message: 'Yes I', args }
})(arrayOfData)

// minus1 is not defined
console.log(x2, message, args, minus1)

//
;(args => {
  console.log(args)
  return args
})([...arrayOfData, 7, 8])
