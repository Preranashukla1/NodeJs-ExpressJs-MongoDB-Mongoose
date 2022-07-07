/*String-2 -- repeatEnd
Given a string and an int n, return a string made of n repetitions of the last n characters of the string. You may assume that n is between 0 and the length of the string, inclusive.

Examples

repeatEnd('Hello', 3) → llollollo
repeatEnd('Hello', 2) → lolo
repeatEnd('Hello', 1) → o*/

function repeatEnd(str, n){
    return (str.substr(str.length-n,n)).repeat(n);
  }

let answer = repeatEnd('Hello', 3) ;
console.log(answer);