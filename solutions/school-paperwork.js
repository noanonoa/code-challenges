// prompt
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need.
// NOTE: if n < 0 or m < 0, return 0.

// sample
// paperwork(5, 5) = 25
require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8');
rl.question('how many classmates?:  ', input => {
  const n = parseInt(input);

  rl.question('how many paperworks?:  ', input => {
    const m = parseInt(input);

    console.log(paperwork(n,m));
    process.exit();
  })
})

// solution
function paperwork(n, m) {
  if(n < 0 || m < 0) return 0;
  return n * m;
}