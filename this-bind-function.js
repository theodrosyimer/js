/* eslint-disable babel/no-invalid-this */
function f() {
  return { name: this.name, age: this.age, address: this.address }
}

const o = {
  name: 'Theo',
  age: 38,
  address: 'Paris',
}

/* IT works */

// f.call(o) // ?

const g = f.bind(o) // ?
g() // ?

/* It doesn't work with arrow functions */

const fn = () => ({ name: this.name, age: this.age, address: this.address })

// const g2 = fn.call(o) // ?

const g2 = fn.bind(o) // ?
g2() // ?
