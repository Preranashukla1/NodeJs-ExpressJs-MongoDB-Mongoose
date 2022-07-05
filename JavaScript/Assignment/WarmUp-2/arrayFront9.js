/*Warmup-2 -- arrayFront9
Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

Examples

arrayFront9([1,2,9,3,4]) → true
arrayFront9([1,2,3,4,9]) → false
arrayFront9([1,2,3,4,5]) → false*/

function arrayFront9(nums){
    let count = 0;
    
    for(let i =0; i<4; i++){
      if(nums[i] == 9){
        return true;
        break;
      }
    }
    return false;
  }

let answer = arrayFront9([1,2,9,3,4]);
console.log(answer);