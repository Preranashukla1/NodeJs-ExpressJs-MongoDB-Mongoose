function maxTriple(nums){
  let n = nums.length-1;
  let a = nums[0]
  let b = nums[n]
  let c = nums[n/2]
  
  if(c>=a && c>=b){
  return c;}
  if(a>b && a>c){
  return a;}
  return b;
}