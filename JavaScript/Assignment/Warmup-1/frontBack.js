/*Warmup-1 -- frontBack
Given a string, return a new string where the first and last chars have been exchanged.

Examples

frontBack('code') → eodc
frontBack('a') → a
frontBack('ab') → ba*/

function frontBack(str){
    let n = str.length;
    if(n==1 || str == '' || str ==""){
      return str;
    }
    
    let first = str[0];
    let last = str[n-1];
    let newstr = "";
    for(let i = 1; i< n-1; i++){
      newstr = newstr + str[i];
    }
    newstr = last+newstr+first;
    return newstr
  }

let answer = frontBack('');
console.log(answer);