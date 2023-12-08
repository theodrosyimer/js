/*
Coercion is what happen when JavaScript try to interpret code, better to be explicit than letting JS try to guess/interpret code
*/

// Example

// all is fine
console.log('5' - 5)

// not good, '+' is interpreted as an operator
// console.log('5' + 5) // 55

/*
prevent this behaviour by using 'typeof' before any operation
*/

// Another Example

// when using authentification or using an api, we need to be aware about which type of value return 'true' or 'false'

const loginDetails = []

// logic for getting details from DB
const loginID = loginDetails[0]

if (loginID) {
  console.log('Allow user to login')
} else {
  console.log('Authentification failed')
}

// Values that interpret as false
// false
// null
// undefined
// ''
// 0
// NaN
// void 0

const nullValue = null
const undefinedValue = undefined
const emptyString = ''
const zero = 0
const NaNValue = NaN
const voidZeroValue = void 0

!nullValue ? 'nullValue is falsy' : 'nullValue is truthy'
!undefinedValue ? 'undefinedValue is falsy' : 'undefinedValue is truthy'
!emptyString ? 'emptyString is falsy' : 'emptyString is truthy'
!zero ? 'zero is falsy' : 'zero is truthy'
!NaNValue ? 'NaNValue is falsy' : 'NaNValue is truthy'
!voidZeroValue ? 'voidZeroValue is falsy' : 'voidZeroValue is truthy'
