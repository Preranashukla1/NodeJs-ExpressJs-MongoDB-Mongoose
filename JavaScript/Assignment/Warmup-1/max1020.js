/*Warmup-1 -- max1020
Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

Examples

max1020(11, 19) → 19
max1020(19, 11) → 19
max1020(11, 9) → 11*/

function max1020(a, b){
    if(in1020(a) == false && in1020(b)==false){
      return 0;
    }
    return max(a,b);
  }
  
  function in1020(n){
    if(n>=10 && n<=20){
      return true;
    }
    return false;
  }
  
  function max(a,b){
    if((a>b && a<=20) || b>20){
      return a;
    }
    return b;
  }

let answer = max1020(11,19);
console.log(answer);