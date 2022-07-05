/*Warmup-2 -- stringSplosion
Given a non-empty string like "Code" return a string like "CCoCodCode".*/

function stringSplosion(str){
    if(str == ""){
      return str;
    }
    let newstr = "";
    for(i=0;i<=str.length;i++){
      newstr = newstr + str.substr(0,i);
    }
    return newstr;
  }

let answer = stringSplosion("Code");
console.log(answer);