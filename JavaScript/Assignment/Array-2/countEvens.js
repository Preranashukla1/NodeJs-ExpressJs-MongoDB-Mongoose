function countEvens(nums){
  let count = 0;
  for(i=0;i<nums.length;i++){
    if(nums[i]%2==0){count++}
  }
  return count;
}