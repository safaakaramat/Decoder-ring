// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  let orderedAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let encoded = [];

    function substitution(input, alphabet, encode = true) {
      //check if there is a repeated character;
      let onlyUniqueChar = new Set(alphabet);
      if (alphabet === undefined || alphabet.length !== 26 || [...onlyUniqueChar].length !== 26) {
        return false;
      }
      //transform the alphabet string into an array
      alphabet = alphabet.split("");
      if (encode) {
        for (let i = 0; i < 26; i++){
          encoded[orderedAlphabet[i]] = alphabet[i];
        }
      } else {
        for (let i = 0; i < 26; i++){
          encoded[alphabet[i]] = orderedAlphabet[i] ;
        }
      }
      let message = input.toLowerCase().split("");
      let answer = message.map((letter) => {
        if (letter === " ") return " ";
        return encoded[letter]
      })
  //return the answer as a string
      return answer.join("");

    }

    return {
      substitution,
    };
  })();

  module.exports = { substitution: substitutionModule.substitution };
