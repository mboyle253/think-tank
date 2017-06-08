function findLongestSubarrayBySum(s, arr) {
  /*
  You have an unsorted array arr of non-negative integers and a number s. 
  Find a longest contiguous subarray in arr that has a sum equal to s. 
  Return two integers that represent its inclusive bounds. 
  If there are several possible answers, return the one with the smallest left bound. 
  If there are no answers, return [-1].

  Your answer should be 1-based, meaning that the first position of the array is 1 instead of 0.
  /*
  
  /** Build the prefixes. While the prefixes are building, check if the subarray exists from previous entries.

  var pfxs = [], sum = 0, c = [-1], length=0;;
  for (var i=0;i<arr.length;i++){
    pfxs.push(sum+=arr[i]);
    var end = pfxs.length-1;

    if (pfxs[end] >= s) {
      if (pfxs[end] === s) {
        if (end >= length) {
          length = end;
          c = [1, end + 1];
        }
      }
      else {
        var diff = pfxs[end] - s;
        var start = pfxs.indexOf(diff);   
        if (start != -1 && end - start >= length) {
          length = end - start;
          c = [start + 2, end + 1];
        }
      }
    }
  }
  return c;
}
