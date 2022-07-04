/*Warmup-1 -- front3
Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.

Examples

front3('Java') → JavJavJav
front3('Chocolate') → ChoChoCho
front3('abc') → abcabcabc*/

function front3(str){
    if(str == '' || str==""){
      return str;
    }
    
    let n = str.length;
    let newstr = "";
    
    if(n<=3){
      return str.repeat(3);
    }
    
    newstr = str.substr(0,3);
    return newstr.repeat(3);
  }

let answer = front3("Java");
console.log(answer);