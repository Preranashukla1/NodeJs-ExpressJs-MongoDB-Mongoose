function rotateLeft3(nums){
  let firstele = nums[0];
  for(let i = 0; i<=1;i++){
    nums[i] = nums[i+1];
  }
  nums[2]=firstele;
  return nums;
}