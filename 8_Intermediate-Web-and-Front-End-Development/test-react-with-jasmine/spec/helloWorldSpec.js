const helloWorld = require("../src/helloWorld");

describe("helloWorld", () => {
    it("returns 'Hello World'", () => {
        let actual = helloWorld();
        expect(actual).toBe("Hello World");
    })
})