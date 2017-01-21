
function RenderTiles(contextID,colors) {
	var colorset = colors;
	// Set Canvas
	var canvas = document.getElementById(contextID),
	    ctx = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;

//	ctx.translate(width/2, 0);
//	ctx.rotate(45*Math.PI/180);

	function drawTiles(tiles) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (var i = 0; i < tiles.length; i++) {
			var tile = tiles[i];

			ctx.fillStyle = tile.color.slice(0,-2)+remap(tile.life,100,0,1,0) + ")";
	        ctx.fillRect(tile.x*(TILE_SIZE+MARGIN),tile.y*(TILE_SIZE+MARGIN),TILE_SIZE,TILE_SIZE);

	        if (tile.life == 0 && tile.topSurface != null && tile.topSurface.life != 0) {
		        ctx.fillStyle = "rgba(10, 10, 10, 0.8)";
		        ctx.fillRect(tile.x*(TILE_SIZE+MARGIN),tile.y*(TILE_SIZE+MARGIN),TILE_SIZE,TILE_SIZE/8);
	        }
		}

	}

	function drawWaves(tiles) {
		var wavecol = colorset.wave.slice(0, -2);

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (var i = 0; i < tiles.length; i++) {
			var tile = tiles[i];

			for (var j = 0; j < tile.waves.length; j++) {
				var wave = tile.waves[j];

				if (wave.delay != null) {
					// wait
				} else if (wave.fadeIn != null) {

					ctx.fillStyle = wavecol + remap(wave.fadeIn, WAVE_ANIMATION.fadeIn.startValue,WAVE_ANIMATION.fadeIn.endValue,0,1) + ")";
			        ctx.fillRect(tile.x*(TILE_SIZE+MARGIN),tile.y*(TILE_SIZE+MARGIN),TILE_SIZE,TILE_SIZE);

				} else if (wave.fadeOut != null) {

					ctx.fillStyle = wavecol +  remap(wave.fadeOut, WAVE_ANIMATION.fadeOut.startValue,WAVE_ANIMATION.fadeOut.endValue,1,0) + ")";
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
