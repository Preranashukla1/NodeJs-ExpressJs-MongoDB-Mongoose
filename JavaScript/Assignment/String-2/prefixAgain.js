/*String-2 -- prefixAgain
Given a string, consider the prefix string made of the first N chars of the string. Does that prefix string appear somewhere else in the string? Assume that the string is not empty and that N is in the range 1..str.length().

Examples

prefixAgain('abXYabc', 1) → true
prefixAgain('abXYabc', 2) → true
prefixAgain('abXYabc', 3) → false*/

function prefixAgain(str, n){
    for(i=n;i<str.length;i++){
      if(str.substr(0,n) == str.substr(i,n)){
        return true;
      } 
    }
    return false;
  }

let answer = prefixAgain('abXYabc', 1);
console.log(answer);