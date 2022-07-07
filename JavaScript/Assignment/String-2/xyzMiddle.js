/*String-2 -- xyzMiddle
Given a string, does "xyz" appear in the middle of the string? To define middle, we'll say that the number of chars to the left and right of the "xyz" must differ by at most one. This problem is harder than it looks.

Examples

xyzMiddle('AAxyzBB') → true
xyzMiddle('AxyzBB') → true
xyzMiddle('AxyzBBB') → false*/

function xyzMiddle(str){
    let newstr = str.split('xyz');
    for(let i=0; i<str.length;i++){
      if(str.substr(i,3)=="xyz"){
        let first = str.substr(0,i);
        let second = str.substr(i+3);
        let diff = Math.abs(first.length - second.length);
        if(diff<=1){
          return true;
        }
      }
    }
    return false;
  }

let answer = xyzMiddle('AAxyzBB') ;
console.log(answer);