const {add, flatten} = require('../src');

describe("add", () => {
	test("1 + 1 = 2", () => {
		expect(add(1,1)).toEqual(2);
	});

	test("3 + 2 = 5", () => {
		expect(add(3,2)).toEqual(5);
	})

	test("31254124 + 8151831589 = 8183085713", () => {
		expect(add(31254124, 8151831589)).toEqual(8183085713);
	})
})

describe("flatten", () => {
	test("2 arrays", () => {
		expect(flatten([[1,2],[3,4]])).toEqual([1,2,3,4])
	})
	test("5 flat items", () => {
		expect(flatten([1,2,"three","IV"])).toEqual([1,2,"three","IV"])
	})
	test("Mixtures of arrays and items", () => {
		expect(flatten([[1,2],3,4])).toEqual([1,2,3,4]);
		expect(flatten([1,[2,3],4])).toEqual([1,2,3,4]);
		expect(flatten([[1,2,3],4])).toEqual([1,2,3,4]);
	})
	test.todo("Multiple nested arrays")
})