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

function avoidObstacles(inputArray) {
  var ar = inputArray.sort(function(a, b){return a-b});
  var min = 1;
  for (var i=1;i<=ar[ar.length-1];i+=min){
    if (ar.indexOf(i) > -1){
      min++;i=0;
    }
  }

  if (ar.indexOf(min) > -1) min++;
  return min;
}

function boxBlur(image) {
  var result = [];

  for (var j=0;j+3<=image.length;j++){
    var ar = [];
    for (var z=0;z+3<=image[0].length;z++){
      var sum = 0;
      for (var i = z; i<z+3; i++) {
        for (var x = j; x < j+3; x++) {
          sum = sum += image[x][i];
        }
      }
      ar.push(Math.floor(sum / 9));
    }

    result.push(ar);
  }

  return result;
}

function minesweeper(matrix) {
  var result = [];

  function getCount(row, x, i, count){
    if (row === undefined) return count;
    if (row!=x && row[i]) count+=1;
    if (i>0 && row[i-1]) count+=1;
    if (i+1 < x.length && row[i+1]) count+=1;

    return count;
  }

  matrix.map(function(x, idx, self){
    var row = [];
    for (var i=0; i< x.length;i++){
      var count = getCount(self[idx+1], x, i, getCount(x, x, i, getCount(self[idx-1], x, i, 0)));
      row.push(count);
    }

    result.push(row);
  });

  return result;
}
