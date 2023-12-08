/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable babel/no-unused-expressions */
/* eslint-disable no-unused-vars */
/*
from: [JavaScript Object and Array Destructuring - (Youtube)](https://www.youtube.com/watch?v=FsgGx1SMXn0)
*/

/*
Object destructuring
*/
const weather = {
  city: 'Paris',
  unit: 'Celsius',
  today: { max: 2.6, min: -6.3 },
  tomorrow: { max: 3.2, min: -5.8 },
}

const {
  unit,
  city,
  today,
  today: { max },
  tomorrow: { max: renamedMax },
} = weather

unit
city
today
max
// renaming the property as we destructure it
renamedMax
// min /* min is not defined */

/*
Array destructuring
*/
const mistbornBooks = [
  { title: 'The Final Empire' },
  { title: 'The Well of Ascension' },
  { title: 'The Hero of Ages' },
  { title: 'The Alloy of Law' },
  { title: 'Shadows of Self' },
  { title: 'The Bands of Mourning' },
  { title: 'The Eleventh Metal' },
  { title: 'Allomancer jak and the Pits of Eltania' },
  { title: 'Secret History' },
]

// 1st method: naming them, always start at index 0
// const [final, well, hero, alloy, shadows, bands] = mistbornBooks //?

// 2nd method:
// const [, , , , , band] = mistbornBooks //?

// 3rd method: using indexes and naming them
const { 5: band, 7: allomancer } = mistbornBooks

band
allomancer

/*
Function return destructuring
*/

const sum = (a, b) => a + b
const multiply = (a, b) => a * b

const applyBinaryFunction = (a, b, ...fns) =>
  fns.reduce((acc, fn) => [...acc, fn(a, b)], []) // ?

const [sumResult, mulResult, divResult = 'Not yet set'] = applyBinaryFunction(
  2,
  3,
  sum,
  multiply
) /*?*/
