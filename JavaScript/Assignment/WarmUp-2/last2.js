/*Warmup-2 -- last2
Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

Examples

last2('hixxhi') → 1
last2('xaxxaxaxx') → 1
last2('axxaaxx') → 1*/

function last2(str){
    if(str == "" || str.length<2){
      return 0;
    }
    
    let newstr = str.substr(str.length - 2,2);
    let count = 0;
    for(i=0;i<= str.length-2;i++){
      if(str.substr(i,2) == newstr){
        count++;
      }
    }
    return count-1;
  }

let answer = last2('hixxhi');
console.log(answer);