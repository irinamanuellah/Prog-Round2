import { describe } from "mocha";
import { isHidingAnOption } from "./isHiding.js";
import { expect } from "chai";

describe("Search a position and the result is false", function () {
    it("Should return false when A is after X", function () {
        let input = "X..A...C"
        let expected = false
        expect(isHidingAnOption(input)).to.eq(expected);
    });
    it("Should return false when C is after A", function () {
        let input = "X....A.C.....C.C"
        let expected = false
        expect(isHidingAnOption(input)).to.eq(expected);
    });
});
describe("Search a position and the result is true", function () {
    it("Should return true when C is after X", function () {
        let input = "X..C....A.."
        let result = true
        expect(isHidingAnOption(input)).to.eq(result);
    });
});
