
function PlayerController(canvasID, waves,color) {
	var colorset = color;
	var players = [];

	// add canvas
	var canvas = document.getElementById(canvasID);
	var ctx = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;
//	ctx.translate(width/2, 0);
//	ctx.rotate(45*Math.PI/180);

	// add new player
	function spawnPlayer() {
		if (players.length >= KEY_LAYOUT.length) {
			return console.log("Player "+players.length+" need a Key Layout.");
		}

console.log(players.length);
		players.push(Player(ctx, KEY_LAYOUT[players.length], getPlayerColor(), waves));
	}

	function update() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (var i = 0; i < players.length; i++) {
			players[i].updatePlayer();
			players[i].drawPlayer();
		}
	}

	function getPlayerColor(){
		if(players.length == 0){
			return colorset.p1;
		}
		if(players.length==1){
			return colorset.p2;
		}
	}

	return {
		spawnPlayer: spawnPlayer,
		update: update
	}
}