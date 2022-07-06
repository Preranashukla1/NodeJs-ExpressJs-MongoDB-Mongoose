function deFront(str){
  if(str.substr(0,1)!="a" && str.substr(1,1)!="b"){
    newstr = str.substr(2);
  }
  if(str.substr(0,1)=="a"){
    newstr =  "a" + str.substr(2);
  }
  if(str.substr(1,1)=="b"){
    newstr = "b" + str.substr(2);
  }
  if(str.substr(0,1)=="a" && str.substr(1,1)=="b"){
    newstr = str;
  }
  return newstr
}

/*String-1 -- deFront
Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

Examples

deFront('Hello') → llo
deFront('java') → va
deFront('away') → aay*/

let answer = deFront('away');
console.log(answer);