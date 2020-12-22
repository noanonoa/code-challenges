// prompt
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// sample
// getCount("abracadabra") = 5, there are five a's in the string
require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8');
rl.question('string:  ', input => {
  const str = input;

  console.log(getCount(str));
  process.exit();
})

// solution
function getCount(str) {
  var vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if ('a' == str[i]) vowelsCount++;
    if ('e' == str[i]) vowelsCount++;
    if ('i' == str[i]) vowelsCount++;
    if ('o' == str[i]) vowelsCount++;
    if ('u' == str[i]) vowelsCount++;
  }
  return vowelsCount;
}