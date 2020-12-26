// Prompt
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only 
// once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if
// a character is a duplicate.

// Sample
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8');
rl.question('Enter word to encode:  ', input => {
  const word = input;

  console.log(duplicateEncode(word));
  process.exit();
})


// Solution
function duplicateEncode(word){
  // the word ignores any capitalization, so...
  let characters = word.toLowerCase()
  // first, we loop through the word and find the number of occurrences of each character
  // we can do this by creating a hash table and have its keys represent characters and its values represent the number of occurrences
  // occurrances = { character : number of occurrences }
  let occurrences = {}
  // for each char, if it does not exist let it be (0) + 1.  And, if it does exist, let it equal to (itself) + 1
  for (let char of characters) {
    occurrences[char] = (occurrences[char] || 0) + 1
  }
  // now that the occurrences object has all characters and its number of occurrences, we have to check in characters if the number of occurrence is 1
  // if it is, set the character to equal '('
  // if it occurs more than once, than the character should be set to equal ')'
  // to do this, we can iterate through the characters and check if the current character's occurrence is equal to 1 or greater than 1
  let encode = []
  for (let i = 0; i < characters.length; i++) {
    let character = characters[i]
    encode.push((occurrences[character]) === 1 ? '(' : ')')
  }
  // encode returns as an array '(' for all single occurrences and ')' for all multiple occurrences instead of the original character
  // so we join all values inside encode and return the result
  return encode.join('')
}