function twoChar(str, index){
  if(index <= 0 || str.length-1 <= index){
    return str.substr(0,2);
  }
  return str.substr(index,2);
}

/*String-1 -- twoChar
Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.

Examples

twoChar('java', 0) → ja
twoChar('java', 2) → va
twoChar('java', 3) → ja*/

let answer=twoChar('java', 3);
console.log(answer);