/* eslint-disable no-prototype-builtins */
/* eslint-disable prefer-const */

// source: [prettier/eslint-config-prettier: Turns off all rules that are unnecessary or might conflict with Prettier.](https://github.com/prettier/eslint-config-prettier)

// 7.A.1.1
// An example switch statement

switch (foo) {
  case 'alpha':
    alpha()
    break
  case 'beta':
    beta()
    break
  default:
    // something to default to
    break
}

// 7.A.1.2
// A alternate approach that supports composability and reusability is to
// use an object to store "cases" and a function to delegate:

let cases
let delegator

// Example returns for illustration only.
cases = {
  alpha() {
    // statements
    // a return
    return ['Alpha', arguments.length]
  },
  beta() {
    // statements
    // a return
    return ['Beta', arguments.length]
  },
  _default() {
    // statements
    // a return
    return ['Default', arguments.length]
  },
}

// eslint-disable-next-line space-before-function-paren
delegator = function () {
  let args
  let key
  let delegate

  // Transform arguments list into an array
  // eslint-disable-next-line prefer-rest-params
  args = [].slice.call(arguments)

  // shift the case key from the arguments
  key = args.shift()

  // Assign the default case handler
  delegate = cases._default

  // Derive the method to delegate operation to
  if (cases.hasOwnProperty(key)) {
    delegate = cases[key]
  }

  // The scope arg could be set to something specific,
  // in this case, |null| will suffice
  // eslint-disable-next-line prefer-spread
  return delegate.apply(null, args)
}

// 7.A.1.3
// Put the API in 7.A.1.2 to work:

delegator('alpha', 1, 2, 3, 4, 5)
// [ "Alpha", 5 ]

// Of course, the `case` key argument could easily be based
// on some other arbitrary condition.

let caseKey
let someUserInput

// Possibly some kind of form input?
someUserInput = 9

if (someUserInput > 10) {
  caseKey = 'alpha'
} else {
  caseKey = 'beta'
}

// or...

caseKey = someUserInput > 10 ? 'alpha' : 'beta'

// And then...

delegator(caseKey, someUserInput)
// [ "Beta", 1 ]

// And of course...

delegator()
// [ "Default", 0 ]
