/*String-2 -- catDog
Return true if the string "cat" and "dog" appear the same number of times in the given string.

Examples

catDog('catdog') → true
catDog('catcat') → false
catDog('1cat1cadodog') → true*/

function catDog(str){
    if(str == ""){
      return true;
    }
    let catcount =0, dogcount=0;
    for(let i=0; i<str.length;i++){
      if(str.substr(i,3)=="cat"){catcount++;}
      if(str.substr(i,3)=="dog"){dogcount++;}
    }
    if(catcount == dogcount){
      return true;
    }
    return false;
    
  }

let answer = catDog('catxdogxdogxcat');
console.log(answer);  

answer=catDog('catxxdogxxxdog');
console.log(answer);