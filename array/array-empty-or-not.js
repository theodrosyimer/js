/* eslint-disable no-unused-expressions */
/* ***************************************************** */
/* ***************************************************** */

// Arrays

const a = []
const b = [1]

const r1 = a ? '!null || !undefined but may be empty!' : null
const r2 = a && a.length ? 'non-empty array' : 'empty array'

r1
r2

const r3 = b ? '!null || !undefined but may be empty!' : null
const r4 = b && b.length ? 'non-empty array' : 'empty array'

r3
r4

/* ***************************************************** */
/* ***************************************************** */

// Objects

const o = {}
const o1 = { text: 'this is a text' }

const r5 = o ? '!null || !undefined but may be empty!' : null
const r6 = o && Object.values(o).length ? 'non-empty object' : 'empty object'

r5
r6

const r7 = o1 ? '!null || !undefined but may be empty!' : null
const r8 = o1 && Object.values(o1).length ? 'non-empty object' : 'empty object'

r7
r8
