function minCat(a, b){
  if(a.length<b.length){
    return a+b.substr(b.length-a.length,a.length)
  }
  if(a.length>b.length){
    return a.substr(a.length-b.length,b.length) + b
  }
}

/*String-1 -- minCat
Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

Examples

minCat('Hello', 'Hi') → loHi
minCat('Hello', 'java') → ellojava
minCat('java', 'Hello') → javaello*/

let answer = minCat('Hello', 'Hi');
console.log(answer);