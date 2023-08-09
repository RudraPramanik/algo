//15. missing number
//Question: from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.

//Explanation: You have an array of numbers 1 to 100 in an array. Only one number is missing in the array. The array is unsorted. Find the missing number.

//Answer: You have to act like you are thinking a lot. and then talk about the sum of a linear series of n numbers = n*(n+1)/2

function missingNumber(arr) {
  var n = arr.length + 1,
    sum = 0,
    expectedSum = (n * (n + 1)) / 2;

  for (var i = 0, len = arr.length; i < len; i++) {
    sum += arr[i];
  }

  return expectedSum - sum;
}

console.log(missingNumber([5, 2, 6, 1, 3]));

//Note: this one will give u missing one number in any array of length
