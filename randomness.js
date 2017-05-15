/**
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
**/
function adjacentElementsProduct(inputArray) {
    var total = inputArray[0] * inputArray[1];
    for (var i=0; i<inputArray.length; i++){
        if (i+1 <= inputArray.length);
        {
            var sub = inputArray[i] * inputArray[i+1];
            if (total < sub)
                {
                    total = sub;
                }    
        }
        
    }
    
    return total;
}

/**
Given an n-interesting polygon, find the area of the polygon for n.
**/
function shapeArea(n) {
    if (n===1){
        return 1;
    }
    else {
        return (4 * (n - 1)) + shapeArea(n-1);
    }
    
}

/*
Arrange input array from smallest to largest so that each element will be bigger than the previous one exactly by 1
*/
function makeArrayConsecutive2(statues) {
    var count = 0;
    var sorted = statues.sort(function(x, y){
        return y < x;
    });

    for (var i = 0;i<sorted.length;i++){
       if ((sorted[i] < sorted[i+1]) && (i+1 < sorted.length)){
           count = ((sorted[i+1] - sorted[i]) - 1) + count;
       }
    }
    
    return count;
}


function almostIncreasingSequence1(sequence) {
  var checkArray = function(ar){
    if (ar.length === 2 && ar[0] === ar[1]) return true;

    for (var i=1;i<ar.length;i++){
      if (ar[i-1] >= ar[i]){
        return false;
      }
    }

    return true;
  };

  var success = checkArray(sequence);

  if (!success) {
    var s1 = sequence.slice();
    for (var i = 1; i < sequence.length; i++) {
      if (sequence[i-1] > sequence[i]){
        s1.splice(i-1, 1);
        success = checkArray(s1);
        break;
      }
    }

    if (!success){
      s1 = sequence.slice();
      for (var i = 1; i < sequence.length; i++) {
        if (sequence[i-1] > sequence[i]){
          s1.splice(i, 1)
          success = checkArray(s1);
          break;
        }
      }
    }
  }

  return success;
}


function matrixElementsSum(matrix) {
  var tally = [];

  for (var i=0;i<matrix.length;i++){
    var row = matrix[i];
    var above = i === 0 ? false : matrix[i-1]
    for (var x=0;x<row.length;x++){
      if (row[x] > 0 ){
        if (!above || above[x] > 0){
          tally.push(row[x]);
        }

        if (above && above[x] === 0){
          row[x] = 0;
        }
      }
    }
  }

  var sum = 0;
  for (var y=0;y<tally.length;y++){
    sum = sum + tally[y];
  }

  return sum;
}

function commonCharacterCount(s1, s2) {
  var s1_ = s1.split('');
  var s2_ = s2.split('');
  var count = 0;
  s1_.forEach(function (v) {
    var i = s2_.indexOf(v);
    if (i >= 0){
      s2_.splice(i, 1);
      count = count+1;
    }
  });

  return count;
}

function isLucky(n) {
  function sum_(a, b) {
    return a+b;
  }

  var ar = n.toString(10).split("").map(function(t){return parseInt(t)});
  var length = ar.length/2;
  var ar1 = ar.splice(0, length);
  return ar.reduce(sum_) === ar1.reduce(sum_);
}

function sortByHeight(a) {
  var t = a.filter(function(x){
    return x > -1;
  }).sort(function(c,d){
    return c-d;
  });

  for (var i=0; i< a.length; i++){
    if (a[i]===-1){
      t.splice(i, 0, -1);
    }

  }

  return t;
}

function reverseParentheses(s) {
  var ar = s.match( /\(([^\(\)]+)\)/g);
  if (ar){
    ar.map(function(v){
      var n = v.split('').reverse().join('');
      s = s.replace(v, n.replace(/[\(\)]+/g, ''));
    });
    return reverseParentheses(s);
  }
  else {
    return s;
  }
}
