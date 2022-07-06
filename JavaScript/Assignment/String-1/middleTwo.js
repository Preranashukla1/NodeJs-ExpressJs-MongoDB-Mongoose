function middleTwo(str){
  const num = Number(str);
  if (Number.isInteger(num)) {
    return str;
  }
  return "";
  //return str.substr(str.length/2,2)
}

/*String-1 -- middleTwo
Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.

Examples

middleTwo('string') →
middleTwo('code') →
middleTwo('Practice') →*/

let answer =middleTwo('string');
console.log(answer);