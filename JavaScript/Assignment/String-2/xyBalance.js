/*String-2 -- xyBalance
We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.

Examples

xyBalance('aaxbby') → true
xyBalance('aaxbb') → false
xyBalance('yaaxbb') → false*/

function xyBalance(str){
    let x = false;
    let y = false;
  
    let n = str.length;
  
    for (let i = 0; i < len; i++) {
  
      if (str.charAt(i) == 'x' && y == true){
  
        x = true;
  
        y = false;
  
      } else if (str.charAt(i) == 'x') {
  
        x = true;
  
      }
  
      if (str.charAt(i) == 'y' && x == true)
  
        y = true;
  
    }
  
    if (x == false)
  
      y = true;
  
    return y;
  
  }

  let answer = xyBalance('aaxbby');
  console.log(answer);