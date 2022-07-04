/*Return true if the given string contains between 1 and 3 'e' chars.

Examples

stringE('Hello') → true
stringE('Heelle') → true
stringE('Heelele') → false*/

function stringE(str){
    let newstr = str.split('e');
    let n = newstr.length-1;
    if(n>=1 && n<=3){
      return true;
    }
    return false;
  }

let answer = stringE('Hello');
console.log(answer);