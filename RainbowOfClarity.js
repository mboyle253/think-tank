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

  var x = coord[0].toUpperCase().charCodeAt(0), y=parseInt(coord[1]), 
      countY= 0, countX=0;
  var a='A'.charCodeAt(0), h='H'.charCodeAt(0);
  for (var i=1;i<=2;i++){
    if (y+i <= 8) countY++;
    if (y-i >= 1) countY++;
    if (x+i <= h) countX++;
    if (x-i >= a) countX++;
  }

  return  Math.floor((countY * countX)/2);
}

function deleteDigit(n) {
  return n.toString().split('').reduce((total, t, idx, self)=>{
    var x = parseInt(self.slice(0, idx).concat(self.slice(idx+1, self.length)).join(''));
    return x > total ? x : total;
  }, 0);
}
