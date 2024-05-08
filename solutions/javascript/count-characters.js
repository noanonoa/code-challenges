// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

/* Example:
 * count('aba') -> { a: 2, b: 1 };  
 */

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8');
rl.question('Enter string to count the occurrences of each character: ', input => {
  console.log(count(input));
  process.exit();
})

// Solution
function count(string) {
  let characters = string.split('');
  let occurrence = {};
  for (let character of characters) {
    occurrence[character] = (occurrence[character] || 0) + 1;
  };
  return occurrence;
};