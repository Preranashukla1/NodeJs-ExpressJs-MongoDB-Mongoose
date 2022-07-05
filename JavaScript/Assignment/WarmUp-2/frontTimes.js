/*Warmup-2 -- frontTimes
Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front.

Examples

frontTimes('Chocolate', 2) → ChoCho
frontTimes('Chocolate', 3) → ChoChoCho
frontTimes('Abc', 3) → AbcAbcAbc*/
function frontTimes(str, n){
    let len = str.length;
    if(len<=3){
      return str.repeat(n);
    }
    let newstr = str.substr(0,3);
    return newstr.repeat(n);
  }

let answer = frontTimes('Chocolate', 2);
console.log(answer);