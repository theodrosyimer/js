const objectDefaultValues = { name: 'Theo' }
console.log('objectDefaultValues:', objectDefaultValues)
console.log()

console.log(
  'Using the spread operator to set its value to a copy of `objectDefaultValues`:',
)
console.log('let object2 = {...objectDefaultValues}')
console.log()
console.log(
  'Declaring object2 using `let` keyword sets the `object2` variable as a mutable pointer to the value of `objectDefaultValues`.',
)
console.log()

let object2 = { ...objectDefaultValues }

object2.name = 'Theo2'
console.log("We then set `object2.name` to `Theo2`: object2.name = 'Theo2'")
console.log('object2:', object2)
console.log()

console.log(
  'So, objectDefaultValues === object2:',
  objectDefaultValues === object2,
)
console.log()

console.log('To reset `object2` to its default value, we can do:')
console.log('object2 = objectDefaultValues')
console.log()

object2 = objectDefaultValues

console.log(
  'So, objectDefaultValues === object2:',
  objectDefaultValues === object2,
)
console.log('objectDefaultValues:', objectDefaultValues)
console.log('            object2:', object2)
console.log()

console.log(
  'Again, this is only possible because `object2` is a mutable pointer, declared with the `let` keyword, to the value of `objectDefaultValues`',
)

console.log('-'.repeat(80))

// /////////////////////////////////////////////////////////

console.log('objectDefaultValues:', objectDefaultValues)
console.log()

console.log(
  'Declaring object2 using `const` keyword sets the `object2` variable as an immutable pointer to the value of `objectDefaultValues`.',
)
console.log()

const object3 = { ...objectDefaultValues }

object3.name = 'Theo3'
console.log("We then set `object3.name` to `Theo3`: object3.name = 'Theo3'")
console.log('object3:', object3)
console.log()

console.log(
  'So, objectDefaultValues === object3:',
  objectDefaultValues === object3,
)
console.log()

console.log(
  'To reset `object3` to its default value, we can try to do the same as we did with `object2`:',
)
console.log('object3 = objectDefaultValues')
console.log()

try {
  object3 = objectDefaultValues
  // eslint-disable-next-line no-empty
} catch (error) {}

console.log(
  'But this time, objectDefaultValues === object3:',
  objectDefaultValues === object3,
)
console.log('objectDefaultValues:', objectDefaultValues)
console.log('            object3:', object3)
console.log()

console.log(
  'This is not possible to reassign `object3` because is an immutable pointer, declared with the `const` keyword, to the value of `objectDefaultValues`',
)
export {}
