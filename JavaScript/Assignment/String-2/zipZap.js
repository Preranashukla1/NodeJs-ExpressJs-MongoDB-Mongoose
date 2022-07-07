/*String-2 -- zipZap
Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

Examples

zipZap('zipXzap') → zpXzp
zipZap('zopzop') → zpzp
zipZap('zzzopzop') → zzzpzp*/

function zipZap(str){
    let newstr = "";
    for(let i=0; i<str.length;i++){
      if(str[i]=="z" && str[i+2]=="p"){
        newstr = newstr + "zp";
        i+=2;
      }
      else{
      newstr = newstr + str[i];}
     }
    return newstr;
  }

let answer = zipZap('zipXzap');
console.log(answer);