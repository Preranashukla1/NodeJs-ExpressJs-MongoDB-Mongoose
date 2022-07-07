/*String-2 -- endOther
Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.

Examples

endOther('Hiabc', 'abc') → true
endOther('AbC', 'HiaBc') → true
endOther('abc', 'abXabc') → true*/

function endOther(a, b){
    a = a.toLowerCase();
    b = b.toLowerCase();
    if(a.length<b.length){
      if(b.substr(b.length-a.length,a.length)==a){
        return true
      }
    }
    if(b.length<=a.length){
      if(a.substr(a.length-b.length,b.length)==b){
        return true
      }
    }
    return false
}

let answer = endOther('AbC','HiaBc');
console.log(answer);
