var config = {
  position: 'start',
  draggable: true
}


var board1 = ChessBoard('board1', config);

var chess = new Chess();
while (!chess.game_over()) {
  var moves = chess.moves();
  var move = moves[Math.floor(Math.random() * moves.length)];
  chess.move(move);
}
console.log(chess.pgn());
