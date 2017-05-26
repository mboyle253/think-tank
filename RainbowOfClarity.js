function isDigit(symbol) {
    return !Number.isNaN(parseInt(symbol));
}

function lineEncoding(s) {
  var arr = s.split('');
  var holder = [], str='';
  while (arr.length > 0){
    holder.push(arr.shift());

    if (holder[0] != arr[0]){
      str = holder.length > 1 ? str + holder.length + holder[0] : str + holder[0];
      holder = [];
    }
  }

  return str;
}

function chessKnight(cell) {
  var coord = cell.split('');

  var x = coord[0].toUpperCase().charCodeAt(0), y=parseInt(coord[1]), countY= [], countX=[];
  var a='A'.charCodeAt(0), h='H'.charCodeAt(0);
  for (var i=1;i<=2;i++){
    if (y+i <= 8) countY.push(y+i);
    if (y-i >= 1) countY.push(y-i);
    if (x+i <= h) countX.push(x+i);
    if (x-i >= a) countX.push(x-i);
  }

  return  Math.floor((countY.length * countX.length)/2);
}
