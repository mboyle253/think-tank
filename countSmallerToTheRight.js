/*
You have array of integers nums and you need to return a new counts array. 
In the new counts array, counts[i] is the number of smaller elements to the right of nums[i].
*/

function countSmallerToTheRight(nums) {
  var result = [];
  while (nums.length > 0){
    var elm = nums[0];
    var count=0;
    for (var i=0;i<nums.length;i++){
      if (elm>nums[i]) count+=1;
    }

    result.push(count);
    nums.shift();
  }

  return result;
}
