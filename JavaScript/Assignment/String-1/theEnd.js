function theEnd(str, front){
  if(front == true){
    return str.substr(0,1);
  }
  return str.substr(str.length-1,1)
}

/*String-1 -- theEnd
Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.

Examples

theEnd('Hello', true) → H
theEnd('Hello', false) → o
theEnd('oh', true) → o*/

let answer=theEnd('oh', true);
console.log(answer);