// PROMPT
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.
// For example, a multiplication table (string) for number == 5 looks like below:

// SAMPLE
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

require('process')
const readLine = require('readline')
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
process.stdin.setEncoding('utf8')
rl.question('type in a number:  ', input => {
  const num = input;

  console.log(multiTable(num))
  process.exit()
})

// SOLUTION
function multiTable(num) {
  // code
  // loop through tables constraint (1-10) and multiply it by the target number at each iteration
  // return the whole table, (\n)

  let result = ''
  let i = 1

  while (i > 0 && i <= 10) {
    // console.log(`answer = ${i} * ${num}`)
    let answer = i * num
    if (i === 10) {
      result += i + ' * ' + num + ' = ' + answer
    } else {
      result += i + ' * ' + num + ' = ' + answer + '\n'
    }
    i++
  }
  return result
}

// console.log(multiTable(5))