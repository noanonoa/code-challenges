// prompt
// Build Tower by the following given argument:

// number of floors (integer and always greater than 0).
// Tower block is represented as *
// JavaScript: returns an Array;

// Sample
/* 
for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 1  0
  '    ***    ', 3  1
  '   *****   ', 5  2
  '  *******  ', 7  3
  ' ********* ', 9  4
  '***********' 11  5
]
*/

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8')
rl.question('number of tower floors:  ', input => {
  const nFloors = Number(input);

  console.log(towerBuilder(nFloors));
  process.exit();
})


// Solution
function towerBuilder(nFloors) {
  // build here
  let tower = []

  for (let i = 0; i < nFloors; i++) {
    // for length of spaces on the left side, its relation to nFloors is (nFloors - 1) - i
    // for stars, its length is double the floor level plus one (i * 2) + 1
    // for length of spaces on the right side, its relation to nFloors is (nFloors - 1) - i
    let space = ' '.repeat((nFloors - 1) - i)
    let star = '*'.repeat((i * 2) + 1)
    tower.push(space + star + space)
  }
  return tower;
}