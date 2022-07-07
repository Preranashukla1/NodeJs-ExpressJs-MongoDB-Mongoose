/*String-2 -- starOut
Return a version of the given string, where for every star (*) in the string the star and the chars immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

Examples

starOut('ab*cd') → ad
starOut('ab**cd') → ad
starOut('sm*eilly') → silly*/

function starOut(str){
    let newstr =str.split("*");
    if(newstr.length==1){
      return str;
    }
    str = newstr[0].substr(0,newstr[0].length-1);
    for(i=1;i<newstr.length-1;i++){
      if(newstr[i]!=""){
        str = str + newstr[i].substr(1,newstr[i].length-2);
      }
    }
    str = str + newstr[newstr.length-1].substr(1,newstr[newstr.length-1].length);
    return str;
  }

  let answer=starOut('ab*cd') ;
  console.log(answer);