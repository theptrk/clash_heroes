// Games templating engine
var Concerns = {
grid_columns  :8 ,
grid_rows     :6 ,
start_units   :3 ,
// init_board - ruined my prototypical inheritence 
	// g.p1.board = init_board, then whenever I changed g.p1.board[2] = 2, it would changed p2 also!!! 
}
var c = Concerns;

var Templating = {};
var t = Templating; 
t.game          = "<h1>Clash of Heroes</h1><div id='game_board'><div id='top_game_board'></div></div>";
t.bot_board       = "<div id='bot_game_board'></div>"
t.div_row         = "<div class='line'></div>" ;
t.div_action_row  = "<div class='line action_row'></div>" ;
t.div_box         = "<div class='box'></div>" ;
