
function PlayerController(canvasID, waves, surfaces,color) {
	var colorset = color;
	var players = [];

	// add canvas
	var canvas = document.getElementById(canvasID);
	var ctx = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;

	var pointToPlayer = null;

//	ctx.translate(width/2, 0);
//	ctx.rotate(45*Math.PI/180);

	// add new player
	function spawnPlayer() {
		if (players.length >= KEY_LAYOUT.length) {
			return console.log("Player "+players.length+" need a Key Layout.");
		}

		players.push(Player(players.length, ctx, KEY_LAYOUT[players.length],  getPlayerColor(), waves));
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
				if(!players[i].isPlayerDead()){
					setDead(players[i], null);
				}
			} else if (tile.waves.length > 0) {
				var waves = tile.waves.filter(function(wave) {
					return wave.playerID != players[i].playerID;
				});
				if (waves.length > 0) {
					if(!players[i].isPlayerDead()){
						setDead(players[i], waves[0].playerID);
					}
				}
			}
		}
	}

	function getPlayerColor(){
		if(players.length == 0){
			return colorset.p1;
		}
		if(players.length == 1){
			return colorset.p2;
		}
	}

	function isEnd() {
		return players.filter(function(player) {
			return player.isPlayerDead();
		}).length >= players.length-1;
	}

	function setDead(player, triggerPlayer) {
		if (triggerPlayer == null) {
			console.log((player.playerID+1)%players.length);
			triggerPlayer = players[(player.playerID+1)%players.length];
		}
		pointToPlayer = triggerPlayer.playerID;
		player.setDead();
	}

	function getPointsToPlayerID() {
		return pointToPlayer;
	}
	return {
		spawnPlayer: spawnPlayer,
		update: update,
		isEnd: isEnd,
		getPointsToPlayerID : getPointsToPlayerID
	}
}