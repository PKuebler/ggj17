
function RenderTiles(contextID) {
	var size = 32;
	var margin = 2;

	// Set Canvas
	var canvas = document.getElementById(contextID),
	    ctx = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;

	function draw(tiles) {
		ctx.clearRect(0, 0, canvas.width, 0);
		ctx.translate(width/2, 0);
		ctx.rotate(45*Math.PI/180);

		ctx.fillStyle = "#1c1a1a";
		for (var i = 0; i < 20; i++) {
			for (var j = 0; j < 20; j++) {
				if (i == 10 && j == 10) {
					ctx.fillStyle = "#62266d";
				} else {
					ctx.fillStyle = "#1c1a1a";					
				}
		        ctx.fillRect(i*(size+margin),j*(size+margin),size,size);
			}
		}
	}

	return {
		draw: draw
	}
}

var renderer = RenderTiles("background");
renderer.draw();