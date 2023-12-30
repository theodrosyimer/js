/**
 * A definition of a curried function to select a value from an object or an array
 *
 * @param {{}|[*]} subject
 */
const selectOrDefault = (subject) =>
  /**
   *@param {string|number} key
   */
  (key) => subject?.[key] ?? 'default@example.com'

const object = {
  name: 'Theo',
  age: 38,
  // email: 'example@example.com'
}

let select = selectOrDefault(object)
const email = select('email')

const array = ['Theo', 38, 'example@example.com']

select = selectOrDefault(array)
const head = select(0)

console.log(email, head)
