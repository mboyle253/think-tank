function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  return ((yourLeft === friendsLeft && yourRight === friendsRight) ||
  (yourLeft === friendsRight && yourRight === friendsLeft))
}

function arrayMaximalAdjacentDifference(inputArray) {

  var max = 0;
  inputArray.map(function(v, idx, s){
    if (idx != 0){
      var v1 = Math.abs(v - s[idx-1]);
      max = v1 > max ? v1 : max;
    }
   });

  return max;
}

function isIPv4Address(inputString) {
  var ar = inputString.split('.');
  if (ar.length != 4) return false;

  for (var i=0; i<ar.length; i++){
    if (!new RegExp("\\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\\b").test(ar[i])) return false;
  }
  return true;
}
