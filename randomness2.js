function alternatingSums(a) {
  var odds = 0, evens = 0;
  a.filter(function(v, idx){
    Math.abs(idx % 2) == 1 ? odds += v : evens += v;
  });

  return [evens, odds]
}

function addBorder(picture) {
  picture.map(function(v, idx){
    picture[idx] = '*' + v + '*';
  });

  var frame = '*'.repeat(picture[0].length);

  picture.unshift(frame);
  picture.push(frame);

  return picture;
}

function areSimilar(a, b) {
  var mismatch = [];

  a.map(function(v, i){
    if (v != b[i]){
      mismatch.push(i);
    }
  });

  return (mismatch.length === 0 ||
    (mismatch.length === 2 && a[mismatch[0]] === b[mismatch[1]] && a[mismatch[1]] === b[mismatch[0]]));

}

function arrayChange(inputArray) {
  var moves = 0;
  inputArray.map(function(v, idx){
    if (idx > 0 && inputArray[idx-1] >= inputArray[idx]){
      var t = inputArray[idx-1] + 1;
      moves += (t-inputArray[idx]);
      inputArray[idx] = t;
    }
  });
  return moves;
}

function palindromeRearranging(inputString) {
  var count = 0;
  inputString.split('').filter(function(v, i, s){
    return s.indexOf(v) === i;
  }).map(function(v){
    if (((inputString.split(v).length-1) % 2) === 1) count++;
  });

  return count < 2;
}
