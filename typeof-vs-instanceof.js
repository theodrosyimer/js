/*
source: [What is the instanceof operator in JavaScript?](http://net-informations.com/js/iq/instanceof.htm)

### Which is best to use: instanceof or typeof?

Both are similar in functionality because they both **return type** information, however, it is better to prefer instanceof because it's comparing actual types rather than strings. **Type comparison** is less prone to human error, and it's technically faster since it's comparing pointers in **memory** rather than doing whole string comparisons.
*/
const Animal = function (type) {
  this.type = type
}
const dog = new Animal('dog')
/* eslint-disable */
dog instanceof Animal // ?
dog instanceof Object // ?

// To test if an object is not an instanceof a specific Constructor, you can do
if (!(mycar instanceof Car)) {
  // Do something, like mycar = new Car(mycar)
}
