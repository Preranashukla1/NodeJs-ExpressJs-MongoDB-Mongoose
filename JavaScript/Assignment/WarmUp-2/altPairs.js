/*Warmup-2 -- altPairs
Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

Examples

altPairs('kitten') → kien
altPairs('Chocolate') → Chole
altPairs('CodingHorror') → Congrr*/

function altPairs(str){
    let newstr = "";
    
    for(i=0;i<str.length;i+=4){
      if(i+1 < str.length){
        newstr = newstr + str[i] + str[i+1];
      }
      else{
        newstr = newstr + str[i];
      }
    }
    return newstr;
  }

let answer = altPairs('kitten');
console.log(answer);