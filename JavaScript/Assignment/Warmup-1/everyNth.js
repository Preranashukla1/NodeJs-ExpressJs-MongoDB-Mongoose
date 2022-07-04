/*Warmup-1 -- everyNth
Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

Examples

everyNth('Miracle', 2) → Mrce
everyNth('abcdefg', 2) → aceg
everyNth('abcdefg', 3) → adg*/

function everyNth(str, n){
    let newstr = "";
    if(n<=str.length){
      for(let i = 0; i<=str.length-1; i++){
        if(i%n==0){
          newstr = newstr + str[i];
        }
      }
      return newstr;
    }
    else{
      return str[0];
    }
  }

let answer = everyNth('Miracle',2);
console.log(answer);