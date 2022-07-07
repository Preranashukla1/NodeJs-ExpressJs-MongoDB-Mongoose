/*String-2 -- mixString
Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.

Examples

mixString('abc', 'xyz') → axbycz
mixString('Hi', 'There') → HTihere
mixString('xxxx', 'There') → xTxhxexre*/

function mixString(a, b){
    let newstr = "";
    if(a.length<=b.length){
      for(let i = 0; i<a.length;i++){
        newstr = newstr + a.substr(i,1) + b.substr(i,1);
      }
      newstr = newstr + b.substr(a.length);
    }
    
    if(b.length<a.length){
      for(let i = 0; i<b.length;i++){
        newstr =newstr + a.substr(i,1) + b.substr(i,1);
      }
      newstr = newstr + a.substr(b.length);
    }
    
    return newstr;
  }

let answer = mixString('abc', 'xyz') ;
console.log(answer);