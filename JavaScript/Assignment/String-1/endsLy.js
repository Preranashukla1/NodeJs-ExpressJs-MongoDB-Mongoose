function endsLy(str){
  if(str.substr(str.length-2,2) == "ly"){
    return true;
  }
  return false;
}

/*String-1 -- endsLy
Given a string, return true if it ends in "ly".

Examples

endsLy('oddly') → true
endsLy('y') → false
endsLy('oddl') → false*/

let answer = endsLy('oddly');
console.log(answer);