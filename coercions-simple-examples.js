let n = 0
// n = 1

// n = ''
// n = 'hello'

// n = undefined
// n = null
// n = NaN
// n = void 0

// thruthy / falsy
n ? 'truthy' : 'falsy' /*?. $*/
n == true /*?. $*/
n == false /*?. $*/ // this is true only for numbers and strings

// boolean: we can cast to boolean first using `!` or `!!` and then compare
!n === true /*?. $*/
!n === false /*?. $*/
!!n === true /*?. $*/
!!n === false /*?. $*/

// without casting to boolean first
// this does not work
n === true /*?. $*/
n === false /*?. $*/

let a = "0";
let b = [];
let c = {};

let d = "";
let e = 0;
let f = null;
let g;

!!a;   // true
!!b;   // true
!!c;   // true

!!d;   // false
!!e;   // false
!!f;   // false
!!g;   // false
