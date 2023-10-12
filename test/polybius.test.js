const { expect } = require("chai");
const { polybius } =
  require("../src/polybius");

describe("polybius", () => {

  it("should encode the message by translating each letter to number pairs", () => {
    const message = "thinkful";
    const actual = polybius(message);
    const expected = "4432423352125413";
    expect(actual).to.equal(expected);
  });

  it("should leave space as is", () => {
    const message = "hello world";
    const actual = polybius(message);
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letter", () => {
    const message = "Hello";
    const actual = polybius(message);
    const expected = "3251131343";
    expect(actual).to.equal(expected);
  });

  it("should return false when decoding and the number of charachters is even exluding spaces", () => {
    const message = "44324233521254134";
    const actual = polybius(message, false);
    expect(actual).to.be.false;
  });

  it("should translate 42 to i and j when decoding", () => {
    const message = "4432423352125413";
    const actual = polybius(message, false);
    expect(actual).to.include("i");
    expect(actual).to.include("j");
  });

  it("should leave space as is when decoding", () => {
    const message = "3251131343 2543241341" ;
    const actual = polybius(message, false);
    const expected = "hello world";
    expect(actual).to.equal(expected);
  });

  })
