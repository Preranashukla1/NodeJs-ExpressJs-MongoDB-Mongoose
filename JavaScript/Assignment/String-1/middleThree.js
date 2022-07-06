function middleThree(str){
  n = parseInt(str.length/2)
  return str.substr(n-1,3);
}

/*String-1 -- middleThree
Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

Examples

middleThree('Candy') → and
middleThree('and') → and
middleThree('solving') → lvi*/

let answer = middleThree('Candy');
console.log(answer);