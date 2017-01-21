
function PlayerController(canvasID, waves, surfaces) {
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

		players.push(Player(ctx, KEY_LAYOUT[players.length], PLAYER_COLORS[players.length], waves));
	}

	function update() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (var i = 0; i < players.length; i++) {
			players[i].updatePlayer();
			players[i].drawPlayer();

			// is Dead?
			var tilePos = players[i].getPlayerTilePos();
			var tile = surfaces.GetSurface(tilePos.x, tilePos.y);
			if (tile == null || tile.life == 0) {
				players[i].setDead();
			}
		}
	}

	return {
		spawnPlayer: spawnPlayer,
		update: update
	}
}