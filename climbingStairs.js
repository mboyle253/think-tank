/*
https://codefights.com/interview/5ME639PHWbEz3QpNR
*/

function climbingStairs(n) {
  if (n == 0) return 0;

  var a = [];
  for (var i=0;i<n;i++){
    a.push(i<2 ? i+1 : a[i-2] + a[i-1]);
  }

  return a[a.length-1];

}
