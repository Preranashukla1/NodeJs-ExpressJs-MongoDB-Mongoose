/*Warmup-1 -- endUp
Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

Examples

endUp('Hello') → HeLLO
endUp('hi there') → hi thERE
endUp('hi') → HI*/

function endUp(str){
    let n = str.length;
    
    if(n<3){
      return str.toUpperCase();
    }
    
    let newstr = str.substr(n-3,3);
    return str.substr(0,n-3) + newstr.toUpperCase();
  }

let answer = endUp('Hello');
console.log(answer);