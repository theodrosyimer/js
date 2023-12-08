// @ts-nocheck
/* eslint-disable no-unused-expressions */
/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */

// 4.1.1
// When only evaluating that an array has length,
// instead of this:
if ( array.length > 0 ) {}

// ...evaluate truthiness, like this:
if ( array.length ) {}


// 4.1.2
// When only evaluating that an array is empty,
// instead of this:
if ( array.length === 0 ) {}

// ...evaluate truthiness, like this:
if ( !array.length ) {}


// 4.1.3
// When only evaluating that a string is not empty,
// instead of this:
if ( string !== '' ) {}

// ...evaluate truthiness, like this:
if ( string ) {}


// 4.1.4
// When only evaluating that a string _is_ empty,
// instead of this:
if ( string === '' ) {}

// ...evaluate falsy-ness, like this:
if ( !string ) {}


// 4.1.5
// When only evaluating that a reference is true,
// instead of this:
if ( foo === true ) {}

// ...evaluate like you mean it, take advantage of built in capabilities:
if ( foo ) {}


// 4.1.6
// When evaluating that a reference is false,
// instead of this:
if ( foo === false ) {}

// ...use negation to coerce a true evaluation
if ( !foo ) {}

// ...Be careful, this will also match: 0, "", null, undefined, {}
// If you _MUST_ test for a boolean false, then {}
if ( foo === false ) {}


// 4.1.7
// When only evaluating a ref that might be null or undefined, but NOT false, "" or 0,
// instead of this:
if ( foo === null || foo === undefined ) {}

// ...take advantage of == type coercion, like this:
if ( foo == null ) {}

// Remember, using == will match a `null` to BOTH `null` and `undefined`
// but not `false`, "" or 0
undefined == null
