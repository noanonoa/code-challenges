// Challenge prompt:  https://adventofcode.com/2020/day/1
function getInput() {
  let fs = require('fs'), // require file system
      input = fs.readFileSync("day-1-input.txt").toString("utf-8"), // read input file and stringify
      numbers = new Array(); // array to contain new string
  numbers = input.split('\n').map(Number);  // split at line break and call Number() on string elements
  return numbers;
}

function find2020(arr) {
  let hashTable = {},
      difference = 0,
      multiply = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in hashTable)) {
      // if arr value is not in hashTable, store the difference of (2020 - array value) into hashTable
      hashTable[2020 - arr[i]] = i;
    } else { // else, difference is in hashTable (arr[i] in hashTable)
      // console.log(`the array: ${arr}`) // the array in question
      // console.log(`hashTable target idx value = ${hashTable[arr[i]]}`) // the index value of the array where the target is located
      // console.log(`array value at index from hashTable = ${arr[hashTable[arr[i]]]}`)
      // console.log(`current index value in array: ${i}`)
      // console.log(`the sum of current array value ${arr[i]} + key value from hashTable ${arr[hashTable[arr[i]]]} = ${arr[i] + arr[hashTable[arr[i]]]}`)
      // console.log(`the difference is ${difference}`)
      // console.log(arr[i], difference)
      // console.log(multiply)
      
      difference = arr[hashTable[arr[i]]]; // get hashTable index
      multiply = arr[i] * difference; // multiply current element with the difference
      // console.log(multiply);
      if (multiply != 0) return multiply;
    }
  }
  // if no solution, print not found
  console.log('sum of 2020 not found!')
}

let inputArray = getInput(),
    solution = find2020(inputArray);
console.log(solution);