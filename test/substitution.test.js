const { expect } = require("chai");
const { substitution } =
  require("../src/substitution");

describe("substitution", () => {
  it("should encode the message by using the given substitution alphabet", () => {
    const message = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(message, alphabet);
    const expected = "jrufscpw"
    expect(actual).to.equal(expected)
  })

  it("should ignore capital letters", () => {
    const message = "ThinKful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(message, alphabet);
    const expected = "jrufscpw"
    expect(actual).to.equal(expected)
  })

  it("should leave spaces as is", () => {
    const message = "You are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(message, alphabet);
    const expected = "elp xhm xf mbymwwmfj dne"
    expect(actual).to.equal(expected)
  })

  it("should return false if alphabet parameter is missing", () => {
    const message = "ThinKful";
    const actual = substitution(message);
    expect(actual).to.be.false;
  })

  it("should return false if alphabet parameter is less than 26 characters", () => {
    const message = "ThinKful";
    const alphabet = "short";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  })

  it("should return false if alphabet doesn't have unique characters", () => {
    const message = "ThinKful";
    const alphabet = "abcabcabcabcabcabcabcabcyz";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  })

  it("should work with any unique kind of characters", () => {
    const message = "message";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(message, alphabet);
    const expected = "y&ii$r&";
    expect(actual).to.equal(expected);
  })

  it("should decode the message by using the given substitution alphabet", () => {
    const message = "jrufscpw";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(message, alphabet, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected)
  })

  it("should decode the message and preserve spaces", () => {
    const message = "elp xhm xf mbymwwmfj dne";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(message, alphabet, false);
    const expected = "you are an excellent spy";
    expect(actual).to.equal(expected)
  })

  it("should decode by using any unique kind of characters", () => {
    const message = "y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(message, alphabet, false);
    const expected = "message";
    expect(actual).to.equal(expected);
  })


})
