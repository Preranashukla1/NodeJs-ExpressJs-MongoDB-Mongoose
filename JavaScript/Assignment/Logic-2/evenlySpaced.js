function evenlySpaced(a, b, c){
   let diff1 = 0, diff2 = 0, diff3 = 0;
  if(a==b && a ==c){
    return true;}
  if(a == b || b == c || a == c)
    return false; 
  diff1 = Math.abs(a - b);
  diff2 = Math.abs(a - c);
  diff3 = Math.abs(b - c);

  if(diff1 == diff2)
    return true;
  if(diff1 == diff3)
    return true;
  if(diff2 == diff3)
    return true;
  
  return false;

}

/*Logic-2 -- evenlySpaced
Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.

Examples

evenlySpaced(2, 4, 6) → true
evenlySpaced(4, 6, 2) → true
evenlySpaced(4, 6, 3) → false*/

let answer = evenlySpaced(2,4,6);
console.log(answer);