document.addEventListener("DOMContentLoaded", function(){
  var gamerows = document.querySelectorAll('.game--row');
  var allgamecells = document.querySelectorAll('.game--cell');
  var gamegrid = document.querySelector('.game--grid');
  var gameoverlay = document.querySelector('.game--overlay');
  gameoverlay.className += ' hidden';
  var winner = false;

  var move = 1;
  grid = [[0,0,0], [0,0,0], [0,0,0]];
  var markBox = function() {
    if (winner) return;
    if (!this.getAttribute("data-mark")){
      var row = this.getAttribute('data-row');
      var column = this.getAttribute('data-column');
      this.setAttribute("data-mark", true);
      var className = (move % 2 == 0) ? " circle" : " cross";
      this.className += className;
      
      var p = className.trim();
      grid[row][column] = p;
     
      if (grid[row][0] == p && grid[row][1] == p && grid[row][2] == p) winner=true;
      else if (grid[0][column] == p && grid[1][column] == p && grid[2][column] == p) winner=true;
      else if (row != 1 && column != 1){
        if (row == column){
          if (grid[0][0] == p && grid[1][1] == p && grid[2][2] == p) winner=true;  
        }
        else
        {
          if (grid[row][column] == p && grid[1][1] == p && grid[column][row] == p) winner=true;  
        }
      }
      
      if (winner){
        gameoverlay.classList.remove('hidden');
        gameoverlay.className += ' ' + p;
        gamegrid.className += ' hidden';
      }
      else {
        move++;
        if (move==10) console.log('No winner');        
      }
    }
  };
  
  var resetGame = function(){
    winner=false;

    move=1;
    for (var i = 0; i < allgamecells.length; i++) {
      var gc = allgamecells[i];
      gc.removeAttribute("data-mark");
      gc.setAttribute("class", "game--cell");
    }
    
    grid = [[0,0,0], [0,0,0], [0,0,0]];
    
    gameoverlay.className += ' hidden';
    gamegrid.classList.remove('hidden');

  }
  
  document.getElementsByClassName('game--restart')[0].addEventListener('click', resetGame, false);

  for (var i=0;i<gamerows.length;i++){
    var gamecells=gamerows[i].querySelectorAll('.game--cell')
    for (var x = 0; x < gamecells.length; x++) {
      var gc = gamecells[x];
      gc.addEventListener('click', markBox, false);
      gc.setAttribute("data-row", i);
      gc.setAttribute("data-column", x);
    }
  }
});
