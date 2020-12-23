// prompt
// Your function will be called CharFreq and you will get passed a string, 
// you will then return a dictionary (object in JavaScript) with as keys the characters, and as 
// values how many times that character is in the string. You can assume you will be given valid input.

// sample
// charFreq("I like cats") 
// Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}
require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8');
rl.question('Enter string:  ', input => {
  console.log(charFreq(input));
  process.exit();
})


// solution
function charFreq(str) {
  let dict = {};
  // iterate over the string 
  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    // if the character is in then increment the count
    if (dict[c]) {
      dict[c]++;
    } else {
      // if the key value is not in the hash table assign the key to dictionary
      dict[c] = 1;
    }
  }
  return dict;
}