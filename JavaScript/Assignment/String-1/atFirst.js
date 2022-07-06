function atFirst(str){
  if(str.length<2){
    return str+"@".repeat(2-str.length)
  }
  return str.substr(0,2);
}

/*Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.

Examples

atFirst('hello') → he
atFirst('hi') → hi
atFirst('h') → h@*/

let answer = atFirst('h');
console.log(answer);