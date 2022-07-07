/*String-2 -- wordEnds
Given a string and a non-empty word string, return a string made of each char just before and just after every appearance of the word in the string. Ignore cases where there is no char before or after the word, and a char may be included twice if it is between two words.

Examples

wordEnds('abcXY123XYijk', 'XY') → c13i
wordEnds('XY123XY', 'XY') → 13
wordEnds('XY1XY', 'XY') → 11*/

function wordEnds(str, word){
    let newstr = "";
    let m = str.length;
    let n = word.length;
    
      for(let i=0;i<str.length;i++){
        if(str.substr(i,n)==word){
          let newstr1 = "";
          let newstr2 = "";
          if(i==0){
           newstr1="";
          }
          else{
            newstr1 = str[i-1];
          }
          if(i==m-n){newstr2 = ""}
          else{newstr2 = str[i+word.length]}
          newstr = newstr + newstr1+newstr2;
        }
      }
    
    return newstr;
  }

let answer = wordEnds('abcXY123XYijk', 'XY');
console.log(answer);
