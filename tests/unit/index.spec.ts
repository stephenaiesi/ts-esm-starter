import * as src from "../../src";

describe("package index", () => {
	it("should have unit tests", () => {
		expect(src.identity).toBeDefined();

		for (const val of [1, "a", [1, "a"], { name: "Fred", age: 22 }]) {
			expect(src.identity(val)).toBe(val);
		}
	});
});
