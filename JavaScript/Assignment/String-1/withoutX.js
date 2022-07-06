function withoutX(str){
  if(str.substr(0,1)=="x"){
    str = str.substr(1);}
  if(str.substr(str.length-1,1)=="x"){
    str =  str.substr(0,str.length-1);
   }
  return str;
}

/*String-1 -- withoutX
Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

Examples

withoutX('xHix') → Hi
withoutX('xHi') → Hi
withoutX('Hxix') → Hxi*/

let answer = withoutX('xHi');
console.log(answer);