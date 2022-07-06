function seeColor(str){
  if(str.substring(0,3)=="red"){
    return str.substring(0,3)
  }
  if(str.substring(0,4)=="blue"){
    return str.substring(0,4)
  }
  return "";
}

/*String-1 -- seeColor
Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

Examples

seeColor('redxx') → red
seeColor('xxred') →
seeColor('blueTimes') → blue*/

let answer=seeColor('redxx');
console.log(answer);