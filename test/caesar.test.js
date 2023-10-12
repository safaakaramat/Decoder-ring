const { expect } = require("chai");
const { caesar } =
  require("../src/caesar");
describe("caesar", () => {
  it("should encode message by shifting the letters", () => {
    const message = "thinkful";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });

  it("should encode message by shifting the letters to the left", () => {
    const message = "thinkful";
    const shift = -3;
    const actual = caesar(message, shift);
    const expected = "qefkhcri";
    expect(actual).to.equal(expected);
  });

  it("should decode message by shifting the letters to the opposite direction", () => {
    const message = "wklqnixo";
    const shift = 3;
    const actual = caesar(message, shift, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });

  it("should keep spaces and symbols as is", () => {
    const message = "This is a secret message!";
    const shift = 8;
    const actual = caesar(message, shift);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const message = "BPQA qa I amkzmb umaaiom!";
    const shift = 8;
    const actual = caesar(message, shift, false);
    const expected = "this is a secret message!";
    expect(actual).to.equal(expected);
  });

  it("should return false if shift doesn't exist", () => {
    const message = "thinkful";
    const actual = caesar(message);
    expect(actual).to.be.false;
  });

  it("should return false if shift is 0", () => {
    const message = "thinkful";
    const shift = 0;
    const actual = caesar(message, shift);
    expect(actual).to.be.false;
  });

  it("should return false if shift is greater than 25", () => {
    const message = "thinkful";
    const shift = 99;
    const actual = caesar(message, shift);
    expect(actual).to.be.false;
  });

  it("should return false if shift is less than -25", () => {
    const message = "thinkful";
    const shift = -26;
    const actual = caesar(message, shift);
    expect(actual).to.be.false;
  });

})
