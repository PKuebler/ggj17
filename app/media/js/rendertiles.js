
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

	function draw(tiles) {
		ctx.clearRect(0, 0, canvas.width, 0);

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

	return {
		draw: draw
	}
}
