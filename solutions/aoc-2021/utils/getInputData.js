// get input data from advent of code .txt files
module.exports = function getInputData(day, example){
  const fs = require('fs')
  let fileName = `./${day}_data.txt`
  if (example){
    fileName = `./${day}_example.txt`
  }
  try {
    const data = fs.readFileSync(fileName).toString('utf8')
    return data.split(/\r?\n/)
  } catch (err) {
    console.error(err.message)
  }
}