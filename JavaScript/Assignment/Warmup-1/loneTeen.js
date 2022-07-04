/*Warmup-1 -- loneTeen
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.

Examples

loneTeen(13, 99) → true
loneTeen(21, 19) → true
loneTeen(13, 13) → false*/

function loneTeen(a, b){
    function teen(c){
      if(c>=13 && c<=19){
        return true;
      }
      return false;
    }
    
    if(teen(a)==true && teen(b)==true){
      return false
    }
    else if(teen(a)==false && teen(b)==false){
      return false;
    }
    else{
      return true;
    }
  }

let answer = loneTeen(13,99);
console.log(answer);