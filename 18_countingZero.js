//18. Counting Zeros
//Question: Count Total number of zeros from 1 upto n?

//Answer: If n = 50. number of 0 would be 11 (0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100). Please note that 100 has two 0. This one looks simple but little tricky

//Explanation: So the tick here is. if you have a number 1 to 50 the value is 5. just 50 divided by 10. However, if the value is 100. the value is 11. you will get by 100/10 = 10 and 10/10. Thats how you will get in the more zeros in one number like (100, 200, 1000)

function countZero(n) {
  var count = 0;
  while (n > 0) {
    count += Math.floor(n / 10);
    n = n / 10;
  }
  return count;
}

console.log(countZero(2014));
