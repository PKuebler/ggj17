// Used Variables
var width = window.innerWidth,
    height = window.innerHeight-18;
var devicePixelRatio = window.devicePixelRatio || 1;

// loop
function loop() {
	// render if update

	window.requestAnimFrame(loop);
}

// start loop
loop();