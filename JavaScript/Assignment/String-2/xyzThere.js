/*String-2 -- xyzThere
Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.

Examples

xyzThere('abcxyz') → true
xyzThere('abc.xyz') → false
xyzThere('xyz.abc') → true*/

function xyzThere(str){
    for(let i=0;i<str.length-2;i++){
      if(str[i-1]!="." && str.substr(i,3)=="xyz"){
        return true;
      }
    }
    return false;
  }

let answer = xyzThere('abcxyz');
console.log(answer);