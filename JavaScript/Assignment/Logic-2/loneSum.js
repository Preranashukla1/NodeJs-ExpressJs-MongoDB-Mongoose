function loneSum(a, b, c){
  if(a==c && a!=b && b!=c){
    return b;
  }
  else if(a==b){
    if(b==c){
      return 0;
    }
    if(c!=a){
    return c;
    }
  }
  else if(b==c && a!=c && a!=b){
    return a;
  }
  return a+b+c;
}

/*Logic-2 -- loneSum
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

Examples

loneSum(1, 2, 3) → 6
loneSum(3, 2, 3) → 2
loneSum(3, 3, 3) → 0*/

let answer = loneSum(1,2,3);
console.log(answer)