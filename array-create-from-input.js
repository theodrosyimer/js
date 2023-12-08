const makeArrayFromInput = (...args) => Array.prototype.slice.call(args)

makeArrayFromInput(1, 2, 3) /*?*/
makeArrayFromInput('1', '2', '3') /*?*/
