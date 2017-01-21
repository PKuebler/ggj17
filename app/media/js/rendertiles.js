
function RenderTiles(contextID) {
	// Set Canvas
	var canvas = document.getElementById(contextID),
	    ctx = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;

//	ctx.translate(width/2, 0);
//	ctx.rotate(45*Math.PI/180);

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

	        ctx.fillRect(tile.x*(TILE_SIZE+MARGIN),tile.y*(TILE_SIZE+MARGIN),TILE_SIZE,TILE_SIZE);
		}

	}

	function drawWaves(tiles) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (var i = 0; i < tiles.length; i++) {
			var tile = tiles[i];

			for (var j = 0; j < tile.waves.length; j++) {
				var wave = tile.waves[j];

				if (wave.delay != null) {
					// wait
				} else if (wave.fadeIn != null) {

					ctx.fillStyle = "rgba(98,38,109," + remap(wave.fadeIn, WAVE_ANIMATION.fadeIn.startValue,WAVE_ANIMATION.fadeIn.endValue,0,1) + ")";
			        ctx.fillRect(tile.x*(TILE_SIZE+MARGIN),tile.y*(TILE_SIZE+MARGIN),TILE_SIZE,TILE_SIZE);

				} else if (wave.fadeOut != null) {

					ctx.fillStyle = "rgba(98,38,109," + remap(wave.fadeOut, WAVE_ANIMATION.fadeOut.startValue,WAVE_ANIMATION.fadeOut.endValue,1,0) + ")";
			        ctx.fillRect(tile.x*(TILE_SIZE+MARGIN),tile.y*(TILE_SIZE+MARGIN),TILE_SIZE,TILE_SIZE);

				}
			}
		}
	}

	return {
		drawTiles: drawTiles,
		drawWaves: drawWaves
	}
}
