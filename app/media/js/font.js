function Font(contextID) {
	// Set Canvas
	var canvas = document.getElementById(contextID),
	    ctx = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;

	var nums = {
		1: [0,0,1,
			0,1,1,
			1,0,1,
			0,0,1,
			0,0,1],
		2: [1,1,1,
			0,0,1,
			0,0,1,
			0,1,0,
			1,1,1,
		],
		3: [1,1,1,
			0,0,1,
			1,1,1,
			0,0,1,
			1,1,1
		],
		4: [
			0,1,0,
			1,0,0,
			1,1,1,
			0,0,1,
			0,0,1
		],
		5: [
			1,1,1,
			1,0,0,
			1,1,1,
			0,0,1,
			1,1,1
		],
		6: [1,1,1,
			1,0,0,
			1,1,1,
			1,0,1,
			1,1,1
		],
		7: [1,1,1,
			0,0,1,
			0,1,0,
			1,0,0,
			1,0,0
		],
		8: [1,1,1,
			1,0,1,
			1,1,1,
			1,0,1,
			1,1,1
		],
		9: [1,1,1,
			1,0,1,
			1,1,1,
			0,0,1,
			1,1,1
		],
		0: [1,1,1,
			1,0,1,
			1,0,1,
			1,0,1,
			1,1,1
		]
	}

	function drawInt(num, x, y, color) {
		num = (""+num).split("");

		for (var i = 0; i < num.length; i++) {
			// number
			var numberSetting = nums[num[i]];

			for (var j = 0; j < numberSetting.length; j++) {
				if (numberSetting[j] == 1) {
					var nX = j%3;
					var nY = Math.floor(j/3);

					ctx.fillStyle = color;
			        ctx.fillRect((x+(nX)+4*i)*TILE_SIZE,(y+nY)*TILE_SIZE,TILE_SIZE,TILE_SIZE);
		        }
			}
		}
	}

	function clear() {
		// draw all letters
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	return {
		drawInt: drawInt,
		clear: clear
	}
}
