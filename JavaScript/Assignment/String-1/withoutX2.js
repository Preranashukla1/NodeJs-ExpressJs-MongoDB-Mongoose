function withoutX2(str){
  if(str.substr(1,1)=="x"){
    str = str.substr(0,1) + str.substr(2)
  }
  for(let i = 0; i<2;i++){
    if(str.substr(0,1)=="x"){
      str = str.substr(1);
    }
  }
  return str;
}

/*String-1 -- withoutX2
Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

Examples

withoutX2('xHi') → Hi
withoutX2('Hxi') → Hi
withoutX2('Hi') → Hi*/

let answer=withoutX2('Hi');
console.log(answer);