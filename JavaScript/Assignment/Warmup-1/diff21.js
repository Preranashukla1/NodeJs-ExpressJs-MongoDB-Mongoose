/*Warmup-1 -- diff21
Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

Examples

diff21(19) → 2
diff21(10) → 11
diff21(21) → 0*/

function diff21(n){
    if(n>21){
      return 2*(n-21);
    }
    return 21-n;
  }

let answer = diff21(19);
console.log(answer);

answer = diff21(10);
console.log(answer);

answer = diff21(21);
console.log(answer);

answer = diff21(22);
console.log(answer);

answer = diff21(25);
console.log(answer);

answer = diff21(30);
console.log(answer);

answer = diff21(0);
console.log(answer);

answer = diff21(1);
console.log(answer);

answer = diff21(2);
console.log(answer);

answer = diff21(-1);
console.log(answer);

answer = diff21(-2);
console.log(answer);

answer = diff21(50);
console.log(answer);