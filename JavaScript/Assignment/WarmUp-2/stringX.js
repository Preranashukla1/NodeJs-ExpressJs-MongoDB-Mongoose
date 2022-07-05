/*Warmup-2 -- stringX
Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

Examples

stringX('xxHxix') → xHix
stringX('abxxxcd') → abcd
stringX('xabxxxcdx') → xabcdx*/

function stringX(str){
    let str1 = "";
    if(str==""){
      return str;
    }
    
    let newstr = str.split("x");
    if(newstr.length == 1){
      return str;
    }
    if(str == "x"){
      return "x" + str;
    }
    
    if(str.substr(0,1)!="x" && str.substr(str.length-2,1)!="x"){
      for(let i=0; i<newstr.length;i++){
        str1 = str1 + newstr[i];
      }
      return str1 ;
    }
    if(str.substr(0,1)=="x"){
      if(str.substr(str.substr(str.length-2,1) == "x")){
        for(let i=0; i<newstr.length;i++){
        str1 = str1 + newstr[i];
      }
      return "x" + str1 + "x";
      }
      for(let i=0; i<newstr.length;i++){
        str1 = str1 + newstr[i];
      }
      return "x" + str1;
    }
    
    
  }

let answer = stringX('xxHxix');
console.log(answer);