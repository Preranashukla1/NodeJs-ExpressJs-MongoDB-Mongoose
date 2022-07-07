/*String-2 -- getSandwich
A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.

Examples

getSandwich('breadjambread') → jam
getSandwich('xxbreadjambreadyy') → jam
getSandwich('xxbreadyy') →*/

function getSandwich(str){
    let index = str.indexOf("bread");
    let endindex = str.lastIndexOf("bread");
    if((!(endindex == -1))&& index!=endindex){
      return (str.substring(index+5,endindex))
    }
    return "";
    
  }

let answer = getSandwich('breadjambread') ;
console.log(answer);