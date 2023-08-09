//reverse words
//Question: How would you reverse words in a sentence?

//Answer: You have to check for white space and walk through the string. Ask is there could be multiple whitespace.

//have a tailing white space
//fix this later
//now i m sleepy
function reverseWords(str) {
  var rev = [],
    wordLen = 0;
  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] == ' ' || i == 0) {
      rev.push(str.substr(i, wordLen + 1));
      wordLen = 0;
    } else wordLen++;
  }
  return rev.join(' ');
}

// A quick solution with build in methods:

function reverseWords(str) {
  return str.split(' ').reverse();
}
