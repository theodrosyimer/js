const a = [1, 2, 3, 4]

const is2DArray = (...params) => Array.isArray(params) && params.length === 1

is2DArray(a) // ?
is2DArray(1, 2, 3) // ?
