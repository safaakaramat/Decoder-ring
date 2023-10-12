// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function caesar(input, shift, encode = true) {
   //Check if shift valid;
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
  // Check if not encode we shoul decode input;
    if (encode === false) shift *= -1;
    //Lowercase the input and transform it to an array
    input = input.toLowerCase().split("");

    //if not in alphanets return it as is
    let newInput = input.map((char) => {
      if (!alphabets.includes(char)) {
        return char;
      }
      //add shift to the index to get the new index(shifted)
      let index = alphabets.indexOf(char) + shift;
      //wrap around to the front or to the end if index goes "off" the alphabets;
      if (index > 25) {
        index = index - 26
      } else if (index < 0) {
        index = index + 26
      }

      return alphabets[index];
    });

    //transform the result to a string
    return newInput.join("");

    }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
