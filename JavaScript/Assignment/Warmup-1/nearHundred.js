/*Warmup-1 -- nearHundred
Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

Examples

nearHundred(93) → true
nearHundred(90) → true
nearHundred(89) → false*/

function nearHundred(n){
    if(n>=90 && n<=110){
      return true;
    }  
    else if(n>=190 && n<=210){
      return true;
    }
    else{
      return false;
    }
}

let answer = nearHundred(93);
console.log(answer);

answer = nearHundred(90);
console.log(answer);

answer = nearHundred(89);
console.log(answer);

answer = nearHundred(110);
console.log(answer);

answer = nearHundred(111);
console.log(answer);

answer = nearHundred(121);
console.log(answer);

answer = nearHundred(0);
console.log(answer);

answer = nearHundred(5);
console.log(answer);

answer = nearHundred(191);
console.log(answer);

answer = nearHundred(189);
console.log(answer);