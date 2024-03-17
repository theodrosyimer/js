/* eslint-disable no-unused-expressions */
let a1
a1 ? '!null || !undefined' : 'null || undefined' // ?

const a2 = []
a2 ? '!null || !undefined' : 'null || undefined' // ?

const a3 = []
a3 && a3.length ? 'is not empty' : 'is empty' // ?

const a4 = [1]
a4 && a4.length ? 'is not empty' : 'is empty' // ?

/* **************************************************** */
/* **************************************************** */

let o1
o1 ? '!null || !undefined' : 'null || undefined' // ?

const o2 = {}
object2 ? '!null || !undefined' : 'null || undefined' // ?

const o3 = {}
o3 && Object.values(o3).length ? 'is not empty' : 'is empty' // ?

const o4 = { name: 'Theo' }
o4 && Object.values(o4).length ? 'is not empty' : 'is empty' // ?
