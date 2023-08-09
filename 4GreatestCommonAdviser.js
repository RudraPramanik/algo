//Question: How would you find the greatest common divisor of two numbers?

function greatestCommonDivisor(a, b) {
  var divisor = 2,
    greatestDivisor = 1;

  //if u pass a -ve number this will not work. fix it dude!!
  if (a < 2 || b < 2) return 1;

  while (a >= divisor && b >= divisor) {
    if (a % divisor == 0 && b % divisor == 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

//> greatestCommonDivisor(14, 21);
//=7
//> greatestCommonDivisor(69, 169);
// = 1

//fancy algorithm
//Sorry. can't explain it. As i myself dont understand it 80% of the times. my algorithm analysis instructor told about this and stole if from class note (i am a good student, btw!)

function greatestCommonDivisor(a, b) {
  if (b == 0) return a;
  else return greatestCommonDivisor(b, a % b);
}
