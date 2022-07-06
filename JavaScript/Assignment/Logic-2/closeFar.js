function closeFar(a, b, c){
  let diff1 = 0, diff2 = 0, diff3 = 0;
  if(a==b && a ==c){
    return false;}
  if(a == b || b == c || a == c)
    return true; 
  diff1 = Math.abs(a - b);
  diff2 = Math.abs(a - c);
  diff3 = Math.abs(b - c);

  if(diff1 == diff2)
    return false;
  if(diff1 == diff3)
    return false;
  if(diff2 == diff3)
    return false;
  
  return true;

}

/*Logic-2 -- closeFar
Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.

Examples

closeFar(1, 2, 10) → true
closeFar(1, 2, 3) → false
closeFar(4, 1, 3) → true*/

let answer = closeFar(1,2,10);
console.log(answer);