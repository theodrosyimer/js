// @ts-nocheck
/* eslint-disable eqeqeq */
/* eslint-disable no-sequences */
/* eslint-disable no-void */
/* eslint-disable no-bitwise */
/* eslint-disable vars-on-top */
/* eslint-disable no-redeclare */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-var */

// 3.B.2.1
// source: [rwaldron/idiomatic.js: Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js)

var number = 1
var string = '1'
var bool = false

number // 1
`${number}`
// "1"

string
// "1"
;+string
// 1
;+string++
// 1

string
// 2

bool
// false
;+bool // 0
`${bool}`
// "false"
// 3.B.2.2

var number = 1
var string = '1'
var bool = true

string === number
// false

string === `${number}`
// true
;+string === number
// true

bool === number
// false
;+bool === number
// true

bool === string
// false

bool === !!string
// true
// 3.B.2.3

const array = ['a', 'b', 'c']

!!~array.indexOf('a')
// true

!!~array.indexOf('b')
// true

!!~array.indexOf('c')
// true

!!~array.indexOf('d')
// false

// Note that the above should be considered "unnecessarily clever"
// Prefer the obvious approach of comparing the returned value of
// indexOf, like:

if (array.indexOf('a') >= 0) {
  // ...
}
// 3.B.2.4

const num = 2.5

parseInt(num, 10)

// is the same as...

~~num

num >> 0

num >>> 0

// All result in 2

// Keep in mind however, that negative numbers will be treated differently...

const neg = -2.5

parseInt(neg, 10)

// is the same as...

~~neg

neg >> 0

// All result in -2
// However...

neg >>> 0

// Will result in 4294967294

// 4.2.1
// Type coercion and evaluation notes

// Prefer `===` over `==` (unless the case requires loose type evaluation)

// === does not coerce type, which means that:

'1' === 1
// false

// == does coerce type, which means that:

'1' == 1
// true

// 4.2.2
// Booleans, Truthies & Falsies

// Booleans:
true, false

// Truthy:
'foo', 1

// Falsy:
'', 0, null, undefined, NaN, void 0
