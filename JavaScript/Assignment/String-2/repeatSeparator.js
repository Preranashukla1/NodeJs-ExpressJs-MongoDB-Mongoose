/*String-2 -- repeatSeparator
Given two strings, word and a separator sep, return a big string made of count occurrences of the word, separated by the separator string.

Examples

repeatSeparator('Word', 'X', 3) → WordXWordXWord
repeatSeparator('This', 'And', 2) → ThisAndThis
repeatSeparator('This', 'And', 1) → This*/

function repeatSeparator(word, sep, count){
    let newstr = "";
    if(count == 0){
      return "";
    }
    for(let i=count;i>1;i--){
      newstr = newstr + word + sep;
    }
    return newstr+word;
  };

let answer = repeatSeparator('Word', 'X', 3);
console.log(answer);