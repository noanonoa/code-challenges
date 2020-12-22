// prompt
// Now you have to write a function that takes an argument and returns the square of it.

// sample
// square(4) = 16;

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8');
rl.question('number to square?:  ', input => {
  const n = parseInt(input);
  
  console.log(square(n));
  process.exit();
})

// solution
function square(n) {
  return n * n;
}