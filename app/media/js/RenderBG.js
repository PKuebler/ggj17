
function RenderBG(contextID,colors) {
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

			ctx.fillStyle = tile.bg;
	        ctx.fillRect(tile.x*(TILE_SIZE+MARGIN),tile.y*(TILE_SIZE+MARGIN),TILE_SIZE,TILE_SIZE);
		}

	}

	return {
		drawTiles: drawTiles
	}
}
