/*
Given an integer n, return the smallest integer a, such that a is a square of some integer and is greater than n.
*/
function nextSquare(n) {
  var f = Math.floor(Math.sqrt(n)), c = f + 1, fs = f*f, cs = c*c;
  return ((n-fs)<(n-cs)) ? fs : cs;
}
