function roundSum(a, b, c){
    a = round10(a)
    b = round10(b)
    c = round10(c)
    return a+b+c;
  }
  
  function round10(n){
    if(n<5){
        return 0;
    }
    if(n>=5 && n<15){
        return 10;
    }
    if(n>=15 && n<=20){
        return 20;
    }
    if(n%10 >=5){
      temp = n;
       while(temp >= 10) 
          temp /= 10;
      temp = parseInt(temp) + 1 ;
      return parseInt(temp+"0");
    }
    if(n%10 <5){
      temp = n;
       while (temp >= 10) 
          temp /= 10;
      temp = parseInt(temp);
      return parseInt(temp+"0");
    }
  }

/*Logic-2 -- roundSum
For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, write a separate helper "public int round10(int num) {" and call it 3 times. Write the helper entirely below and at the same indent level as roundSum().

Examples

roundSum(16, 17, 18) → 60
roundSum(12, 13, 14) → 30
roundSum(6, 4, 4) → 10*/

let answer = roundSum(16,17,18);
console.log(answer);