// PROMPT
// Time to test your basic knowledge in functions! Return the odds from 
// a list:

// EXAMPLE:
// odds([1,2,3,4,5]) #=> [1,3,5]

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8')
rl.question('type in numbers separated by space: ', input => {
  const values = input.split('').map(Number);

  console.log(odds(values));
  process.exit();
})

// SOLUTION:
function odds(values){
  // arrow it
  return values.filter( value => value % 2 !== 0);
}