/*Warmup-2 -- doubleX
Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

Examples

doubleX('axxbb') → true
doubleX('axaxax') → false
doubleX('xxxxx') → true*/

function doubleX(str){
    if(str.substr(str.indexOf('x'),2) == 'xx'){
      return true;
    }
    return false;
  }

let answer = doubleX('axxbb');
console.log(answer);