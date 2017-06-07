function findLongestSubarrayBySum(s, arr) {
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
