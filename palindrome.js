// prompt
// Write a function that takes a non-empty string and that returns a boolean representing whether the string is a palindrone.
// A palindrome is defined as a string thats written the same forward and backward. 
// Note that single chracter strings are palindromes

// sample
// isPalindrome('abcdcba') == true;

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8')
rl.question('type in string to check for palindrome:  ', input => {
  const str = input;

  console.log(isPalindrome(str));
  process.exit();
})



// solution
function isPalindrome(string) {
  // Write your code here.
  let bool = false;
  
  // iterate through the string
  for (let i = 0; i < string.length; i++) {
    let left = i;
    let right = (string.length - 1) - i

    // check if the first character equals the last character
    if (left <= right) {
			if (string[left] !== string[right]) return false;
    	// if the first character and the last character are the same, set bool to true 
      if (string[left] == string[right]) {
        bool = true;
      }
    }
  }
  return bool
}