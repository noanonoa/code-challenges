// prompt
// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:
// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 
// Notice also that you return the characters from the first string concatenated with those from the second string.
// More examples in the tests cases.
// Good luck!


// -- naive solution --
// prompt user for two strings
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
process.stdin.setEncoding('utf8');
// 1st question
rl.question('what is the first string?:  ', answer => {
  const a = answer;
  // 2nd question
  rl.question('what is the second string?:  ', answer => {
    const b = answer;
    // console.log the function
    console.log(anotherSolve(a,b));
    process.exit();
  })
});
function solve(a,b){
  // the input is two strings
  // the output is a string
  let uniqueCharacters = '';
  let current = '';

  // go through string (a) and check if values are in (b)
  for (let i = 0; i < a.length; i++) {
    current = a[i];
    if (!b.includes(current)) {
      uniqueCharacters += current;
    }
  }
  // iterate string (b) and check if values are in (a)
  for (let i = 0; i < b.length; i++) {
    current = b[i];
    if (!a.includes(current)) {
      uniqueCharacters += current;
    }
  }
  return uniqueCharacters;
};


// best practice
function anotherSolve(a, b) {
  return [...a+b].filter(c => !a.includes(c) || !b.includes(c)).join('');
}