/* 
Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. 
The function should return an integer indicating the index in s of the first occurrence of x. 
If there are no occurrences of x in s, return -1.

Rules are : Avoid using built-in functions to solve this challenge.
So it's implemented using z-algorithm, can be read about here ==> http://codeforces.com/blog/entry/3107
*/

function findFirstSubstringOccurrence(s, x) {
  var str = x + '$' + s, len = str.length;

  var L = 0, R = 0;
  var z=[];
  for (var i = 1; i < len; i++) {
    if (i > R) {
      L = R = i;
      while (R < len && str[R-L] == str[R]) R++;
      z[i] = R-L; R--;
    } else {
      var k = i-L;
      if (z[k] < R-i+1) z[i] = z[k];
      else {
        L = i;
        while (R < len && str[R-L] == str[R]) R++;
        z[i] = R-L; R--;
      }
    }
  }

  for (var i = 1; i < len; i++) {
    if (z[i] === x.length){
      return i- (x.length+1);
    }
  }

  return -1;
}
