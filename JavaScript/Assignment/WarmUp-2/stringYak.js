/*Warmup-2 -- stringYak
Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.

Examples

stringYak('yakpak') → pak
stringYak('pakyak') → pak
stringYak('yak123ya') → 123ya*/

function stringYak(str){
    let newstr = "";
    
    let newstr1 = str.split("yak");
    for(let i = 0; i<newstr1.length;i++){
      newstr = newstr + newstr1[i];
    }
    return newstr;
  }

let answer = stringYak('yakpak');
console.log(answer);