/*
  Consider top board vs bottom board
  naming: top will need ids only for the box box
  logic: instead of finding the highest box, well find lowesst
  either keep the logic the same, or the naming the same

*/


function build_top_board () {

  $('body').append( t.game )

  // top game board
  for (var i = c.grid_rows; i > 0; i--) {
    $('#top_game_board').append( t.div_row );

    for (var j = 1; j < c.grid_columns+1; j++) {
      var location = String( j +"-"+ i )
      $('.line:last').append( t.div_box );
      $('.box:last').attr('id', location);
    };
  };
  // top board action area
  $('#top_game_board').append( t.div_action_row );
  for (var j = 1; j < c.grid_columns+1; j++) {
    var action_at = String( "top_action"+ j )
    $('.line:last').append( t.div_box );
    $('.box:last').attr('id', action_at).addClass('action');
  };
}
function build_bot_board (){

  $('#game_board').append(t.bot_board);

  // bot board action area
  $('#bot_game_board').append( t.div_action_row );
  for (var j = 1; j < c.grid_columns+1; j++) {
    var action_at = String( "bot_action"+ j )
    $('.line:last').append( t.div_box );
    $('.box:last').attr('id', action_at).addClass('action');
  };

  for (var i = c.grid_rows; i > 0; i--) {
    $('#bot_game_board').append( t.div_row );

    for (var j = 1; j < c.grid_columns+1; j++) {
      var location = String( "b_" + j +"-"+ i )
      $('.line:last').append( t.div_box );
      $('.box:last').attr('id', location);
    };

  };
}

function build_game(){
  build_top_board();
  build_bot_board();
};