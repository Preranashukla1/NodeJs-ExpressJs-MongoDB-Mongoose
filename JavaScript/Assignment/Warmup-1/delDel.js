/*Warmup-1 -- delDel
Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

Examples

delDel('adelbc') → abc
delDel('adelHello') → aHello
delDel('abcdel') → abcdel*/

function delDel(str){
    if(str.substr(1,3) == 'del'){
      let newstr = str.split('del');
      newstr = newstr[0] + newstr[1];
      return newstr;
    }
    return str;
  }

let answer = delDel('adelbc');
console.log(answer);