
function RenderTiles(contextID) {
	var size = 32;
	var margin = 2;

	// Set Canvas
	var canvas = document.getElementById(contextID),
	    ctx = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;

	ctx.translate(width/2, 0);
	ctx.rotate(45*Math.PI/180);

	function drawTiles(tiles) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = "#1c1a1a";
		for (var i = 0; i < tiles.length; i++) {
			var tile = tiles[i];

			if (tile.life > 50) {
				ctx.fillStyle = "#1c1a1a";
			} else {
				ctx.fillStyle = "#62266d";			
			}

	        ctx.fillRect(tile.x*(size+margin),tile.y*(size+margin),size,size);
		}

	}

	function drawWaves(tiles) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (var i = 0; i < tiles.length; i++) {
			var tile = tiles[i];

			for (var j = 0; j < tile.waves.length; j++) {
				var wave = tile.waves[j];
				if (wave.start == 0) {
					if (wave.end < 10) {
						ctx.fillStyle = "rgba(98,38,109," + remap(wave.end*2, 0,wave.maxEnd,0,1) + ")";
					} else {
						ctx.fillStyle = "rgba(98,38,109," + remap(wave.end*2, wave.maxEnd,0,1,0) + ")";
					}					
			        ctx.fillRect(tile.x*(size+margin),tile.y*(size+margin),size,size);
				}
			}
		}
	}

	return {
		drawTiles: drawTiles,
		drawWaves: drawWaves
	}
}
