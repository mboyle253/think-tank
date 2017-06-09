/*
Given a pattern string and a test string, your task is to implement regex substring matching. 
If pattern is preceded by a ^, the pattern, excluding the ^, will be matched with the starting 
position of the test string. If pattern is followed by a $, the pattern, excluding the $, 
will be matched with the ending position of the test string. 
If no such markers are present, check whether pattern is a substring of test, regardless of its position.

Reused z-algorithm logic from findFirstSubstringOccurrence found here => http://codeforces.com/blog/entry/3107
*/

function regexMatching(pattern, test) {
  var type='', str='';
  if (pattern.charAt(0) == '^')
  {
    type = pattern.slice(0, 1);
    str = pattern.slice(1) + '$' + test;
  }
  else if (pattern.charAt(pattern.length-1) == '$')
  {
    type = pattern.slice(pattern.length-1);
    str = pattern.slice(0, pattern.length-1) + '$' + test;
  }
  else{
    str = pattern + '$' + test;
  }

  var len=str.length;
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

  if (type == '^'){
    return z[pattern.length] === pattern.length-1;
  }
  else if (type == '$'){
    return z[str.length-(pattern.length-1)] === pattern.length-1;
  }
  else{
    for (var i = 1; i < len; i++) {
      if (z[i] === pattern.length){
        return true;
      }
    }
    return false;
  }
}

regexMatching('^code','codefights' )
