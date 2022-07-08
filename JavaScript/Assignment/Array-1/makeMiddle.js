function makeMiddle(nums){
  let arr = [];
  if(nums.length>2){
    arr[0] = nums[(nums.length/2)-1];
    arr[1] = nums[(nums.length/2)];
  }
  else{
  arr = nums;}
  return arr
}