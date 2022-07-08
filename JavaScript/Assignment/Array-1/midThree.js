function midThree(nums){
  let arr = [];
  let n = nums.length-1;
  if(n+1>3){
    arr[0] = nums[(n/2)-1];
    arr[1] = nums[(n/2)];
    arr[2] = nums[(n/2)+1];
  }
  else{
  return nums;}
  return arr;
}