/* eslint-disable eqeqeq */
/* eslint-disable no-bitwise */
/* eslint-disable no-unused-expressions */
function generateBinaryStringFromCounter(n) {
  const binaries = Array(n + 1).fill('')

  for (let i = 1; i <= n; i++) {
    binaries[i] = binaries[i >> 1] + (i & 1)
  }

  return binaries.slice(1)
}

console.log(
  `\nroger_rabbit(2): ${generateBinaryStringFromCounter(2)} should be ["1", "10"]`,
)

console.log(
  `\nroger_rabbit(3): ${generateBinaryStringFromCounter(3)} should be ["1", "10", "11"]`,
)

console.log(
  `\nroger_rabbit(4): ${generateBinaryStringFromCounter(4)} should be ["1", "10", "11", "100"]`,
)

// Explanation

const binaries = [
  '',
  '1',
  '10',
  '11',
  '100',
  '101',
  '110',
  '111',
  '1000',
  '1001',
  '1010',
]

// ////////////

const i = 10

i >> 1 // ?
'0b0110' >> '0b0001' // ?
'0b0110' >> '0b0001' == '0b0011' // ?

binaries[i >> 1] // ?

i & 1 // ?
'0b0110' & '0b0001' // ?

binaries[i >> 1] + (i & 1) // ?

binaries[i] = binaries[i >> 1] + (i & 1) // ?

// ////////////
