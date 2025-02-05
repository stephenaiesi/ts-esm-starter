import cli from "../../src/cli/main";

describe("command line interface", () => {
	it("prints 'Hello World!' to stdout", async () => {
		// Spy on console.log to capture output
		const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

		await cli();

		// Assert that console.log was called with "Hello World!"
		expect(logSpy).toHaveBeenCalledWith("Hello World!");

		// Restore the original implementation
		logSpy.mockRestore();
	});
});
