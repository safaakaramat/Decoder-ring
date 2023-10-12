// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6



const polybiusModule = (function () {
  // you can add any code you want within this function scope

   let polybiusSquare = {
      1: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'},
      2: { 1: 'f', 2: 'g', 3: 'h', 4: 'i/j', 5: 'k'},
      3: { 1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p'},
      4: { 1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u'},
      5: { 1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z'},
    }

  function polybius(input, encode = true) {
    //lowercase the input and transform it to an array
    let message = input.toLowerCase().split("");
    let messageNoSpaces = message.filter((space) => space !== " ");
    if(encode){
      let buildEncryption = [];
      message.forEach((character) =>{
        //check if there is a space we need to leave it as is
        if(character== " "){
           buildEncryption.push(character)
        }
        //transform the letters to numbers by creating nested for loop;
        for(let c=1; c<6 ; c++){
          for(let r=1; r<6; r++){
            if(polybiusSquare[c][r].includes(character)){
              buildEncryption.push(r,c);
            }
          }
        }
      });
      return buildEncryption.join("")
    }
    //check if encode is false to decode the input;
    if(!encode){
     let decodeString = "";
      if(messageNoSpaces.length%2 !==0){
        return false;
      }
      for(let i=0; i<message.length; i+=2 ){
        if(message[i]== " "){
          i--;
          decodeString += " ";
        }else{
          decodeString += polybiusSquare[message[i+1]][message[i]];
        }
      }
      return decodeString;
    }

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
