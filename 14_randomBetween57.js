//14. random between 5 to 7
//Question:If you have a function that generate random number between 1 to 5 how could u generate random number 1 to 7 by using that function?

//Answer: Very simple. think of some basic arithmetic and you will get it.

function rand5() {
  return 1 + Math.random() * 4;
}

function rand7() {
  return 5 + (rand5() / 5) * 2;
}
