// PROMPT
// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . 
// The input is the amount of USD as an integer, and the output should be a string that 
// states the amount of Yuan followed by 'Chinese Yuan'

// For Example:

//   usdcny(15) // => '101.25 Chinese Yuan'
//   usdcny(465) // => '3138.75 Chinese Yuan'

// The conversion rate you should use is 6.75 CNY for every 1 USD. 
// All numbers shold be rounded to the nearest hundredth (e.g. 21.00 NOT 21.0 or 21) (HINT: google toFixed)

require('process');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8')
rl.question('type in Dollar amount to convert to Chinese Yuan: ', input => {
  const usd = Number(input);
  
  console.log(usdcny(usd));
  process.exit();
})

// SOLUTION
function usdcny(usd) {
  // code below
  let conversionRate = 6.75
  let yuan = (usd * conversionRate).toFixed(2)
  return (`${yuan} Chinese Yuan`)
}