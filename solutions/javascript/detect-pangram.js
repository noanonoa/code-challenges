/*
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
process.stdin.setEncoding("utf-8");
rl.question("Please type a sentence to check if it's a pangram: ", input => {
  const string = input;
  console.log(isPangram(string));
  process.exit();
});

function isPangram(string){
  //...
  // We need all characters of the alphabet at least once, A-Z.
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];    
  
  // We can use string.toLowerCase() since case does not matter, and compare it to alphabet.
  const array = string.toLowerCase().split("");
  let i = 0;
  
  // If characters match, we can store it in a hash table and keep track of occurrences.
  let occurrences = {};
  
  while (i < array.length) {
    const targetCharacter = array[i];
    
    // if the character is not an alphabet letter, skip character and continue
    if (alphabet.indexOf(targetCharacter) === -1) {
      i++;
      continue;
    }
    
    // if there are no occurrences of targetCharacter, set it to 1.
    if (!occurrences.hasOwnProperty(targetCharacter)) {
      occurrences[targetCharacter] = 1;
    } else {
      occurrences[targetCharacter]++;
    }
    
    // go onto the next character.
    i++;
  };

  // For each letter of the alphabet, if any of them are not in occurrences we return false.
  for (let letter of alphabet) {
    if (!occurrences.hasOwnProperty(letter)) {
      return false;
    }
  };
  
  // By the end of the loop, all characters have occurred at least once so we return true.
  return true;
};


/*
Another solution

const isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(x => {
    return string.indexOf(x) !== -1;
  });
};

*/
