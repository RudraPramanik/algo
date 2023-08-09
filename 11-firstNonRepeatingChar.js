//11. First non repeating char
//Question: How could you find the first non repeating char in a string?

//Answer: You must ask follow up questions.

//Clarification: Is it case sensitive?

//Interviewer: interviewer might say no.

//Clarification: is it very long string or couple hundred?

//Interviewer: Why does that matter

//you: for example, if it is a very long string say a million characters and i want to check whether 26 English characters are repeating. I might check whether all characters are duplicated in every 200 letters (for example) other than looping through the whole string. this will save computation time.

//Interviewer: For simplicity, you string is "the quick brown fox jumps then quickly blow air"

//Clarification: (silly question) ascii or unicode.


function firstNonRepeatChar(str){
  var len = str.length,
      char, 
      charCount = {};
  for(var i =0; i<len; i++){
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  for (var j in charCount){
    if (charCount[j]==1)
       return j;
  }
}  

console.log(firstNonRepeatChar('the quick brown fox jumps then quickly blow air'))

        
//this has one problem. It is not guaranteed that for in loop will be executed in order.