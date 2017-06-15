/*
https://codefights.com/interview/GFhev49JRkvy9tA5e/description
*/
function houseRobber(n) {
  if (n.length==0) return 0;
  if (n.length==1) return n[0];
  if (n.length==2) return Math.max(...n);

  var q=[];
  for (var i=0;i< n.length;i++){
    if (i==0) q.push(n[i]);
    else if (i==1) q.push(Math.max(n[i], n[i-1]));
    else {
      q.push(Math.max(q[q.length-1], q[q.length-2]+n[i]))
    }
  }

  return q[q.length-1];
}
