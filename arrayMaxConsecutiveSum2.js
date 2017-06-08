/*
Given an array of integers, find the maximum possible sum you can get from one of its contiguous subarrays.
The subarray from which this sum comes must contain at least 1 element.
*/
function arrayMaxConsecutiveSum2(arr) {

  var sum = 0, min = 0, result = arr[0];

  for (var i=0;i<arr.length;i++)
  {
    sum += arr[i];
    var diff = sum-min;
    if (diff > result) result = diff;
    if (sum < min) min = sum;
  }

  return result;
}
