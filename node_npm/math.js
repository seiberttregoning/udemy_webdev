// Option 1 =======================================================

// const add = (x, y) => x + y;

// const PI = 3.14159;

// const square = x => x * x;

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;


// Option 2 ========================================================

// const add = (x, y) => x + y;

// const PI = 3.14159;

// const square = x => x * x;

// math = {
//     add: add,
//     PI: PI,
//     square: square
// };

// module.exports = math;


// Option 3 => Most common ===========================================

// module.exports.add = (x, y) => x + y;

// module.exports.PI = 3.14159;

// module.exports.square = x => x * x;

// Can also just use 'exports': 


exports.add = (x, y) => x + y;

exports.PI = 3.14159;

exports.square = x => x * x;