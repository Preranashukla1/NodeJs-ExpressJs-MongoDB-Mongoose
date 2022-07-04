/*Warmup-1 -- makes10
Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

Examples

makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true*/

function makes10(a, b){
    if(a==10 || b==10 || (a+b)==10){
      return true;
    } 
    return false;
   }

let answer = makes10(9,10);
console.log(answer);

answer = makes10(9,9);
console.log(answer);

answer = makes10(1,9);
console.log(answer);

answer = makes10(10,1);
console.log(answer);

answer = makes10(10,10);
console.log(answer);

answer = makes10(8,2);
console.log(answer);

answer = makes10(8,3);
console.log(answer);

answer = makes10(10,42);
console.log(answer);

answer = makes10(12,-2);
console.log(answer);