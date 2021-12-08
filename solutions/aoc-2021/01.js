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