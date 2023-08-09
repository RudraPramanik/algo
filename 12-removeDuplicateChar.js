//Question: How will you remove duplicate characters from a sting?

//You: This is very similar to first non repeating char. You will asks similar question. Is it case sensitive.

//If interviewer says, this is case sensitive then life become easier you. If he says no. you can either use string.toLowercase() to make whole string lower. he might not like it. because return string will not posses the same case. So

function removeDuplicateChar(str) {
  var len = str.length,
    char,
    charCount = {},
    newStr = [];
  for (var i = 0; i < len; i++) {
    char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else charCount[char] = 1;
  }
  for (var j in charCount) {
    if (charCount[j] == 1) newStr.push(j);
  }
  return newStr.join('');
}

console.log(removeDuplicateChar('Learn more javascript dude'));

//Note:this has one problem. It is not guaranteed that for in loop will be executed in order.

//For case insensitive: when u r setting property of charCount or increase counter, just make the char.toLowerCase(). or you can do something fancy with charCode (if you can deal with it.)
