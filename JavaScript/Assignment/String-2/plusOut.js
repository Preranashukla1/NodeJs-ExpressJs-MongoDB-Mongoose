/*String-2 -- plusOut
Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.

Examples

plusOut('12xy34', 'xy') → ++xy++
plusOut('12xy34', '1') → 1+++++
plusOut('12xy34xyabcxy', 'xy') → ++xy++xy+++xy*/

function plusOut(str, word){
    let newstr = "";
    for(let i=0; i<str.length;){
      if(str.substr(i,word.length)==word){
        newstr = newstr + str.substr(i,word.length);
        i = i+word.length;
      }
      else{
      newstr = newstr + "+";
      i++;}
    }
    return newstr;
  }

let answer = plusOut('12xy34', 'xy');
console.log(answer);