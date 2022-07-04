/*Warmup-1 -- intMax
Given three int values, a b c, return the largest.

Examples

intMax(1, 2, 3) → 3
intMax(1, 3, 2) → 3
intMax(3, 2, 1) → 3*/

function intMax(a, b, c){
    function max(first,second){
      if(first > second){
        return first;
      }
      return second;
    }
    
    if(max(a,b) > c){
      return max(a,b);
    }
    return c;
    
  }

let answer = intMax(1, 2, 3);
console.log(answer);