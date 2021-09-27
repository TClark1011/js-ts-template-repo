const {returnsHi} = require("./untested");

const add = (a, b) => a + b;

const flatten = (arr) => arr.reduce((result,curr) => [...result, ...(Array.isArray(curr) ? curr : [curr])], []);

const returns1 = () => 1;

module.exports = {
	add,
	flatten,
	returns1
}