function frontAgain(str){
  if((str.substr(0,2) != str.substr(str.length-2,2) || str.length<2)){
     return false
  }
  return true
}

/*String-1 -- frontAgain
Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

Examples

frontAgain('edited') → true
frontAgain('edit') → false
frontAgain('ed') → true*/

let answer = frontAgain('edited');
console.log(answer);