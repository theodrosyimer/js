// works when checking an error from an inline `IFrame` when
// `instanceof` might fail
function isError(error) {
  if (error && error.stack && error.message) {
    return true
  }

  return false
}

const err = new Error('💣️ Something went wrong')
console.log(isError(err)) // 👉️ true

console.log(isError('test')) // 👉️ false
console.log(isError({})) // 👉️ false

// 👇️️ true -> false positive
console.log(
  isError({
    stack: 1,
    message: 'test',
  })
)
