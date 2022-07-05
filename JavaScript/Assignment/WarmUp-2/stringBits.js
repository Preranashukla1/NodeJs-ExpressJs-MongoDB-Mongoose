/*Warmup-2 -- stringBits
Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

Examples

stringBits('Hello') → Hlo
stringBits('Hi') → H
stringBits('Heeololeo') → Hello*/

function stringBits(str){
    let newstr = "";
    if(str == ""){
      return str;
    }
    for(let i = 0; i<=str.length-1; i+=2){
      newstr = newstr + str[i];
    }
    return newstr
  }

let answer = stringBits('Hello');
console.log(answer);