function lastTwo(str){
  if(str.length<2){
    return str
  }
  return str.substr(0,str.length-2) + str.substr(str.length-1,1) + str.substr(str.length-2,1)
}

/*String-1 -- lastTwo
Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

Examples

lastTwo('coding') → codign
lastTwo('cat') → cta
lastTwo('ab') → ba*/

let answer=lastTwo('coding');
console.log(answer);