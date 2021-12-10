const getInputData = require('./utils/getInputData')
const data = getInputData('01')

function countIncrements(arr){
  if (arr.length < 1) return
  else {
    // type casting from String to Number
    let measurements = arr.map(d => Number(d)),
      measurementBeingCompared = arr[0],
      amountOfTimesMeasurementIncreased = 0

    for (measurement of measurements) {
      if (measurement > measurementBeingCompared) {
        amountOfTimesMeasurementIncreased++
      }
      measurementBeingCompared = measurement
    }
    return amountOfTimesMeasurementIncreased
  }
}

console.log(countIncrements(data)) // 1466

/**
 * Part Two
 */

function countSlidingWindow(arr){
  // type casting from String to Number
  let measurements = arr.map(d => Number(d)),
    slidingWindow = measurements[0] + measurements[1] + measurements[2],
    slidingWindowIncrements = 0
  for (let i = 1; i < measurements.length - 2; i++){
    if (measurements[i] + measurements[i+1] + measurements[i+2] > slidingWindow){
      slidingWindowIncrements++
    }
    slidingWindow = measurements[i] + measurements[i+1] + measurements[i+2]
  }
  return slidingWindowIncrements
}

console.log(countSlidingWindow(data)) // 1491