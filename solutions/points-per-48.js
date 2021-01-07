// PROMPT
// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, 
// subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played 
// the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns 
// a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// Examples:
// pointsPer48(12, 20) -> 28.8
// pointsPer48(10, 10) -> 48 
// pointsPer48(5, 17) -> 14.1 
// pointsPer48(0, 0) -> 0

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8')
rl.question('enter ppg and mpg separated by a space: ', input => {
  array = input.toString().split(' ').map(Number);
  const ppg = array[0]
  const mpg = array[1]
  console.log(mpg);
  console.log(ppg);
  console.log(pointsPer48(ppg, mpg));
  process.exit();
})

// SOLUTION
function pointsPer48(ppg, mpg) {
  if (ppg === 0 || mpg === 0) return 0
  // ppg divided by mpg returns points per minute.  We can multiply it by 48 and return product
  return Number((ppg / mpg * 48).toFixed(1))
}