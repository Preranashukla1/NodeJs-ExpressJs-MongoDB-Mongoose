function nonStart(a, b){
  return a.substr(1) + b.substr(1)
}

/*String-1 -- nonStart
Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

Examples

nonStart('Hello', 'There') → ellohere
nonStart('java', 'code') → avaode
nonStart('shotl', 'java') → hotlava*/

let answer=nonStart('Hello', 'There');
console.log(answer);