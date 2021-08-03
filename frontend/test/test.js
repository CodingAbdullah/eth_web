const assert = require("assert");
const Car = require("../src/Car");

let car;

beforeEach(() => {
    car = new Car();
});

describe("Testing Car class", () => {
    it("Testing park", () => {
        assert.strictEqual("Is parked", car.park());
    });
    it("Testing drive", () => {
        assert.strictEqual("driving", car.drive());
    });
});