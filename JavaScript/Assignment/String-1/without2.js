function without2(str){
  if(str.substr(0,2) == str.substr(str.length-2,2) && str.length>=2){
    return str.substr(2)
  }
  return str;
}

/*String-1 -- without2
Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

Examples

without2('HelloHe') → lloHe
without2('HelloHi') → HelloHi
without2('Hi') →*/

let answer = without2('Hi');
console.log(answer);