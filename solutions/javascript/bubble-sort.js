//PROMPT
//Write a function that takes in an array of integers and returns a sorted version of that array. 
//Use the Bubble Sort algorithm to sort the array.



//SAMPLE
//input:		[8, 5, 2, 9, 5, 6, 3]
//output:		sorted [2, 3, 5, 5, 6, 8, 9]


//function bubbleSort(array) {
  // Write your code here.
//  return array.sort( (a,b) => a-b)
//}

function bubbleSort(array) {
  // Write your code here.
  // iterate through the array
  for(let i = 0; i < array.length - 1; i++) {
    // compare first element to the next element
    for (let j = i+1; j < array.length; j++) {
  		// if the right element is less than the left, move it to the left
      if (array[i] > array[j]) {
      	// swap(i, j, array);
        let left = array[i]
        array[i] = array[j]
        array[j] = left;
      }
  	// if the left element is less than the right, move to the next iteration
    }

  }
  // return the sorted array
  return array;
}

function bubbleSortAnother(array) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i]>array[i+1]) {
        swap(i,i+1, array)
        isSorted = false;
      }
		}
  }
  return array;
}

const swap = (left, right, array) => {
	let temp = array[left]
	array[left] = array[right]
	array[right] = temp;
  console.log(array);
}

console.log(bubbleSortAnother([8, 5, 2, 9, 5, 6, 3]));