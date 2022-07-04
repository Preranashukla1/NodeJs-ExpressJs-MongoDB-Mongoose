/*Warmup-1 -- sumDouble
Given two int values, return their sum. Unless the two values are the same, then return double their sum.

Examples

sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8*/

function sumDouble(a, b){
    if(a==b){
      return a*4
    }
    return a+b
    
}

let answer = sumDouble(1,2);
console.log(answer);

answer = sumDouble(3,2);
console.log(answer);

answer = sumDouble(2,2);
console.log(answer);

answer = sumDouble(-1,0);
console.log(answer);

answer = sumDouble(3,3);
console.log(answer);

answer = sumDouble(0,0);
console.log(answer);

answer = sumDouble(0,1);
console.log(answer);

answer = sumDouble(3,4);
console.log(answer);