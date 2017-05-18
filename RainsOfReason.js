function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(function(x){
    return (x === elemToReplace ? substitutionElem : x);
  });
}

function evenDigitsOnly(n) {
  return n.toString().split('').map(function(x){
    return parseInt(x, 10)
  }).every(function(x){
    return x % 2 == 0;
  });
}

function variableName(n) {
  return /^[A-Za-z_][A-Za-z0-9_]*$/g.test(n);
}

function alphabeticShift(n) {

  return n.split('').map(function(x){
    switch (x){
      case 'z' : return 'a'; break;
      case 'Z' : return 'A'; break;
      default :
        return String.fromCharCode(x.charCodeAt() + 1);
    }
  }).join('')

}

function chessBoardCellColor(cell1, cell2) {

  var c1 = cell1.split(''), c2=cell2.split('');

  c1[0] = c1[0].charCodeAt() - 'A'.charCodeAt() + 1;
  c2[0] = c2[0].charCodeAt() - 'A'.charCodeAt() + 1;

  var x = Math.abs((c1[0] % 2) - (parseInt(c1[1] % 2)));
  var y = Math.abs((c2[0] % 2) - (parseInt(c2[1] % 2)));

  return x === y;
}
