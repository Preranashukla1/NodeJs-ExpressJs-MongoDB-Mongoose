/*Warmup-1 -- startOz
Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.

Examples

startOz('ozymandias') → oz
startOz('bzoo') → z
startOz('oxx') → o*/

function startOz(str){
    let newstr = str.substr(0,2);
    
    if(newstr[0] == 'o' && newstr[1]=='z'){
      return newstr;
    }
    else if(newstr[0] == 'o'){
      return newstr[0];
    }
    else if(newstr[1]== 'z'){
      return newstr[1];
    }
    else{
      return ""
    }
}

let answer = startOz('ozymandias');
console.log(answer);