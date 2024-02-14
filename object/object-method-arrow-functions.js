/*
see:
Pros: [javascript - When should I use Arrow functions in ECMAScript 6? - Stack Overflow](https://stackoverflow.com/a/23045200)
&
Cons: [javascript - When should I use Arrow functions in ECMAScript 6? - Stack Overflow](https://stackoverflow.com/questions/22939130/when-should-i-use-arrow-functions-in-ecmascript-6/28135120#28135120)
*/

// Object's method
const person = {
  name: "Theo",
  age: 37,
  // eslint-disable-next-line
  greet: function () {
    console.log(`Hi, i am ${this.name}`);
  },
};

person.greet();

// shorthand for methods
const person2 = {
  name: "Theo",
  age: 37,
  greet() {
    console.log(`Hi, i am ${this.name}`);
  },
};

person2.greet(); // ?

// Using `this` with an arrow function does not work
// First try
const person3 = {
  name: "Theo",
  age: 37,
  greetings1: () =>
    // eslint-disable-next-line babel/no-invalid-this
    console.log(`Hello there my name is ${this.name}, i'm ${this.age}`),
};

person3.greetings1();

const greetings2 = () => {
  // eslint-disable-next-line babel/no-invalid-this
  console.log(`Hello there my name is ${this.name}, i'm ${this.age}`);
};

// Second try
greetings2(person3);
